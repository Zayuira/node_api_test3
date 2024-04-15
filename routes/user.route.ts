import express, { Request, Response } from 'express'
import { get_users } from '../controllers/user.controllers'
import { id_search } from '../controllers/user.controllers'
const user_router = express.Router()

user_router.get('/get-users', (_: Request, res: Response) => {
  try {
    const result = get_users()
    res.json({ result })
  } catch (err) {
    console.log(err)
    return res.json({
      success: false,
      message: 'Алдаа гарлаа',
    })
  }
})
user_router.get('/get-user', (req: Request, res: Response) => {
  try {
    const id_result = id_search(req.query?.user_id)
    if (!id_result) {
      throw new Error('Хэрэглэгч олдсонгүй')
    }
    res.json({ success: true, id_result })
  } catch (error) {
    return res.json({
      success: false,
      message: 'Tiim id tai hereglegch oldsongui',
    })
  }
})
export { user_router }
