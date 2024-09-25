// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoDetails} = props
  const {todo,isDone,id} = TodoDetails
  const todoClassName = isDone ? 'button active' : 'button'
  const ImageUrl = isDone
    ? '.../asset/checkbox.png'
    : '.../asset/tick.png'
  
  const onClicktodo = () => {
    const {todoIsDone} = props
    todoIsDone(id)
  }

  const onDeleteTodo = () => {
    const {deleteTodo} = props
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <div className="todo-container">
        <div>
          <p className="todo">{todo}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="todo-container">
          <button
            className={todoClassName}
            type="button"
            onClick={onClicktodo}
          >
            Done
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteTodo}
         
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
