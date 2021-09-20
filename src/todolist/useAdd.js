import { ref } from 'vue'

// 添加待办事项
const useAdd = todos => {
  const input = ref('')
  const addTodo = () => {
    const text = input.value && input.value.trim()
    if (!text.length) {
      return
    }
    todos.value.unshift({
      text,
      completed: false
    })
    input.value = ''
  }

  return {
    input,
    addTodo
  }
}

export default useAdd
