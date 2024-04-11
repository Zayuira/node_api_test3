import express, { Request, Response } from 'express'
import { post_data } from '../controllers/post.controllers'
const post_router = express.Router()

const post = post_router.get('/get-posts', (req: Request, res: Response) => {
  res.send({ post_data })
})

export { post }
