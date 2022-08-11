import router, { Request, Response } from 'express'
import crudRepository from '../repositories/crud.repository'

const crudRoute = router()

crudRoute.get('/crud_project/v1/tasks', async (req: Request, res: Response) => {
  const todoList = await crudRepository.getToDoList()
  res.status(200).send(todoList)
})

crudRoute.post('/crud_project/v1/tasks', async (req: Request, res: Response) => {
  const newTask = req.body
  await crudRepository.createTask(newTask)
  res.status(201).send('Task Created')
})

crudRoute.put('/crud_project/v1/tasks/:id', (req: Request, res: Response) => {

})

crudRoute.delete('/crud_project/v1/tasks/:id', (req: Request, res: Response) => {

})

export default crudRoute