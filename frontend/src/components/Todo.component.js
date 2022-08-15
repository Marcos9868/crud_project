import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const Todo = ({ todoList }) => {
  return (
    <div className="todos">
      {todoList.map((todo) => {
        return (
          <div className="todo">
            <p>{todo.name}</p>
            <button>
              <AiOutlineEdit size={20} background={'darkgreen'} color={'#64697b'}/>
            </button>
            <button>
              <AiOutlineDelete size={20} color={'#64697b'}/>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Todo