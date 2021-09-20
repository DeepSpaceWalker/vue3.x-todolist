// 删除待办事项
const useRemove = todos => {
  const remove = todo => {
    const index = todos.value.indexOf(todo)
    todos.value.splice(index, 1)
  }

  const removeCompleted = () => {
    todos.value = todos.value.filter(todo => !todo.completed)
  }

  return {
    remove,
    removeCompleted
  }
}

export default useRemove
