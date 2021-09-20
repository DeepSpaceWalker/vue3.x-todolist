import { ref, watchEffect } from 'vue'
import useLocalStorage from '../utils/useLocalStorage'

const storage = useLocalStorage()

// 存储待办事项
const useStorage = () => {
  const KEY = 'TODOKEYS'
  const todos = ref(storage.getItem(KEY) || [])

  watchEffect(() => {
    storage.setItem(KEY, todos.value)
  })

  return todos
}

export default useStorage
