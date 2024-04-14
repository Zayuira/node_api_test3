import express, { Request, Response } from 'express'
import { getusers } from '../controllers/user.controllers'
import { id_Search } from '../controllers/user.controllers'
const user_router = express.Router()

user_router.get('/get-users', (_: Request, res: Response) => {
  try {
    const result = getusers()
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
    const id_result = id_Search(req.query?.user_id)
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
