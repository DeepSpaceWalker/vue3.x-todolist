import { ref } from 'vue'

// 编辑待办项

const useEdit = remove => {
  let beforeEditingText = ''
  const editingTodo = ref(null)

  const editTodo = todo => {
    beforeEditingText = todo.text
    editingTodo.value = todo
  }

  const doneEdit = todo => {
    if (!editingTodo.value) {
      return
    }
    todo.text = todo.text.trim()
    todo.text || remove(todo)
    editingTodo.value = null
  }

  const cancelEdit = todo => {
    editingTodo.value = null
    todo.text = beforeEditingText
  }

  return {
    editingTodo,
    editTodo,
    doneEdit,
    cancelEdit
  }
}

export default useEdit
