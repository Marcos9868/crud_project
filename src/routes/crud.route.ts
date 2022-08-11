import router, { Request, Response } from 'express'
import { send } from 'process'
import crudRepository from '../repositories/crud.repository'

const crudRoute = router()

crudRoute.get('/crud_project/v1/tasks', async (req: Request, res: Response) => {
  const todoList = await crudRepository.getToDoList()
  res.status(200).send(todoList)
})

crudRoute.post('/crud_project/v1/tasks', async (req: Request, res: Response) => {
  const newTask = req.body
  await crudRepository.createTask(newTask)
  res.status(201).json({
    message: 'Created task with success',
    success: true
  })
})

crudRoute.put('/crud_project/v1/tasks/:id', async (req: Request, res: Response) => {
  try {
    const taskId: any = req.params.id
    const modifiedTask = req.body

    modifiedTask.id = taskId
    await crudRepository.changeTask(modifiedTask)
    res.status(204).json({
      message: 'Changed task',
      success: true
    }) 
  } catch (error) {
    if(res.status(400)) {
      res.json({
        message: 'ID Query Error',
        success: false
      })
    } else if (res.status(500)) {
      res.json({
        message: "Internal Database Error",
        success: false
      })
    }
  }
})

crudRoute.delete('/crud_project/v1/tasks/:id', async (req: Request, res: Response) => {
  try {
    const taskID: any = req.params.id
    await crudRepository.removeTask(taskID)
    res.status(200).json({
      message: 'Removed task with success',
      success: true
    })
  } catch (error) {
    if(res.status(400)) {
      res.json({
        message: 'ID Query Error',
        success: false
      })
    } else if (res.status(500)) {
      res.json({
        message: "Internal Database Error",
        success: false
      })
    }
  }
})

export default crudRoute