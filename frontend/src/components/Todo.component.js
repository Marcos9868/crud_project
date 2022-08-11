import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Todo = ({ todoList }) => {
  return (
    <div className="todos">
      {todoList.map((todo) => {
        return (
          <div className="todo">
            <p>{todo.name}</p>
            <button>
              <AiOutlineEdit>

              </AiOutlineEdit>
            </button>
            <button>
              <AiOutlineDelete>
                
              </AiOutlineDelete>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Todo