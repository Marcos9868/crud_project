import './App.css'
import Todo from './components/Todo.component'
import arrayTodoList from './components/TodoList.component'

function App() {
  return(
    <div className='App'>
      <header className='container'>
        <div className="header">
          <h1>Don't be Lazy</h1>
        </div>
        <Todo todoList={arrayTodoList}></Todo>
        <input className="inputName"/>
        <button className='newTaskButton'>New Task</button>
      </header>
    </div>
  )
}

export default App