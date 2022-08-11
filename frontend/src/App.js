import './App.css';
import Todo from './components/Todo.component'
import arrayTodoList from './components/TodoList.component'

function App() {
  return (
    <div className="App">
      <header className="container">
        <Todo todoList={arrayTodoList}></Todo>
      </header>
    </div>
  );
}

export default App;
