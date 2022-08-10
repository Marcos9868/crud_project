import express, { Request, Response  } from 'express'
import cors from 'cors'
import './db/config'

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req: Request, res: Response) => {
  res.json({
    message: "Server running perfectly",
    success: true
  })
})

server.listen(4000, () => {
  console.log('Server running...')
})

export default server