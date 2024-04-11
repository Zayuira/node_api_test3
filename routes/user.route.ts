import express, { Request, Response } from 'express'
import { data } from '../controllers/user.controllers'
const user_router = express.Router()

user_router.get('/get-users', (req: Request, res: Response) => {
  res.json(data)
})

export { user_router }
