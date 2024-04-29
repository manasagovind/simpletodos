import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {
    isSaved: true,
    inputValue: '',
  }

  componentDidMount() {
    const {todoDetails} = this.props
    const {title} = todoDetails
    this.setState({inputValue: title})
  }

  changeValue = event => {
    this.setState({inputValue: event.target.value})
  }

  editSave = () => {
    this.setState(prevstate => ({isSaved: !prevstate.isSaved}))
  }

  onDeleteTodo = () => {
    const {todoDetails, deleteTodo} = this.props
    const {id} = todoDetails
    deleteTodo(id)
  }

  render() {
    const {isSaved, inputValue} = this.state

    return (
      <li className="todo-item">
        <input type="checkbox" />
        {isSaved ? (
          <div className="saved-Cont">
            <p className="title">{inputValue}</p>
            <button
              type="button"
              onClick={this.editSave}
              className="saved-butt"
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="saved-Cont">
            <input
              type="text"
              onChange={this.changeValue}
              className="title"
              value={inputValue}
            />
            <button
              type="button"
              onClick={this.editSave}
              className="saved-butt"
            >
              Save
            </button>
          </div>
        )}

        <button
          type="button"
          className="delete-btn"
          onClick={this.onDeleteTodo}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
