import express from 'express'
import { router } from './routes'
import body_parser from 'body-parser'
const app = express()
const port = 4000
//yg delgetsen deer yu butsaahiin chn haruulj bga
//end yg portii cn songood serverii cn ajiluulj bga hesg
app.use(body_parser.urlencoded({ extended: true }))
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
app.use('/', router)

//herwee yg odoo com der cn ymr2 port ajilj bgag medmer bvl
//      `sudo lsof -i -P -n | grep LISTEN`
