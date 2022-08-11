import db from '../config/db/config'
import TodoList from '../models/todo.model'

class crudRepository {
  async getToDoList(): Promise<TodoList[]> {
    const script = `SELECT * FROM todoList`;

    const result = await db.query<TodoList>(script)
    const rows = result.rows
    return rows || [];
  }

  async createTask(task: TodoList): Promise<String> {
    const query = `
      INSERT INTO todoList ( name ) 
      VALUES ($1)
    `;

    const values = [task.name]
    const { rows } = await db.query(query, values)
    const [newTask] = rows
    return newTask
  }

  async changeTask(task: TodoList): Promise<void> {
    const script = `
      UPDATE todoList SET
        name = $1
      WHERE id = $2  
    `;

    const values = [task.name, task.id]
    await db.query(script, values)
  }

  async removeTask(id: number): Promise<void> {
    const script = `
      DELETE FROM todoList
      WHERE id = $1
    `;

    const values = [id]
    await db.query(script, values)
  }
}

export default new crudRepository()