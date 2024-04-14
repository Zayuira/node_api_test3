import { Router } from 'express'
import { user_router } from './user.route'
import { post_router } from './post.route'
const router = Router()
router.use('/post-api', post_router)
router.use('/user-api', user_router)

//   router.use('/user-api/',  try{
//     if(user_router)

//   }
//     catch (error) {
//      console.log(error, 'user-api oldsongui')
//   })

//   router.use('/post-api/', post_router)
export { router }
