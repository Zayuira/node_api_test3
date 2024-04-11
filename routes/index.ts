import express, { Router } from 'express'
import { user_router } from './user.route'
import { post } from './post.route'
const router = Router()
router.use('/user-api/', user_router)
router.use('/post-api/', post)
export { router }
