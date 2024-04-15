import express, { Request, Response } from 'express'
import { get_posts } from '../controllers/post.controllers'
import { post_id_Search } from '../controllers/post.controllers'

const post_router = express.Router()
post_router.get('/get-posts', (_: Request, res: Response) => {
  try {
    const result = get_posts()
    res.json(result)
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: 'Алдаа гарлаа',
    })
  }
})
post_router.get('/get-post', (req: Request, res: Response) => {
  try {
    if ((req.query && !req.query.id) || typeof req.query.id !== 'string') {
      throw new Error('Id buruu baina')
    }

    const postid_result = post_id_Search(req.query?.id)
    if (!postid_result) {
      throw new Error('Пост олдсонгүй')
    }
    console.log(postid_result)
    res.json({ success: true, postid_result })
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: error.message,
    })
  }
})
export { post_router }
