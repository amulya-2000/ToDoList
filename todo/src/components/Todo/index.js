/* Write your CSS here */
import {Component} from 'react'
import {v4} from 'uuid'

import TotoItem from '../TodoItem'

import './index.css'

class Todo extends Component {
  state = {
    todoInput: '',
    todoList: [],
  }

  deleteTodo = todoId => {
    const {todoList} = this.state

    this.setState({
      TodoList: TodoList.filter(todo => todo.id !== todoId),
    })
  }

  todoIsDone = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(eachTodo => {
        if (id === eachTodo.id) {
          return {...eachTodo, isDone: !eachTodo.isDone}
        }
        return eachTodo
      }),
    }))
  }

  renderTodoList = () => {
    const {todoList} = this.state

    return todoList.map(eachTodo => (
      <TodoItem
        key={eachTodo.id}
        TodoDetails={eachTodo}
        todoIsDone={this.todoIsDone}
        deleteTodo={this.deleteTodo}
      />
    ))
  }

  onAddTodo = event => {
    event.preventDefault()
    const {todoInput} = this.state
    const newTodo = {
      id: v4(),
      todo: todoInput,
      isDone: false,
      
    }

    this.setState(prevState => ({
      todoList: [...prevState.todoList, newTodo],
      todoInput: '',
    }))
  }

  onChangeTodoInput = event => {
    this.setState({
      todoInput: event.target.value,
    })
  }

  render() {
    const {todoInput, todoList} = this.state

    return (
      <div className="app-container">
        <div className="todo-container">
          <h1 className="app-heading">Todo List</h1>
          <div className="todo-inputs">
            <form className="form" onSubmit={this.onAddTodo}>
              <p className="form-description">
                Add a new todo list
              </p>
              
              <textarea
                placeholder="Todo"
                className="todo-input"
                value={todoInput}
                onChange={this.onChangeTodoInput}
                rows="3"
              />
              <button type="submit" className="add-button">
                Add Todo
              </button>
            </form>
          </div>
          <hr className="line" />
          <ul className="todo-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
