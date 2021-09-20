import { computed, onMounted, onUnmounted, ref } from 'vue'

const useFilter = todos => {
  const type = ref('all')

  const allDone = computed({
    get() {
      return !todos.value.filter(todo => !todo.completed).length
    },
    set(value) {
      todos.value.forEach(todo => {
        todo.completed = value
      })
    }
  })

  const filter = {
    all: list => list,
    active: list => list.filter(todo => !todo.completed),
    completed: list => list.filter(todo => todo.completed),
  }

  const filterTodos = computed(() => filter[type.value](todos.value))

  const remainingCount = computed(() => filter.active(todos.value).length)

  const count = computed(() => todos.value.length)

  const onHashChange = () => {
    const hash = window.location.hash.replace('#/', '')

    if (filter[hash]) {
      type.value = hash
    } else {
      type.value = 'all'
      window.location.hash = ''
    }
  }

  onMounted(() => {
    window.addEventListener('hashchange', onHashChange)
    onHashChange()
  })

  onUnmounted(() => {
    window.removeEventListener('hashchange', onHashChange)
  })

  return {
    allDone,
    filterTodos,
    remainingCount,
    count
  }
}

export default useFilter
