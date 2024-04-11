let fs = require('fs')
//array iin type iig ingj todorhoilnoo hu
const data: Array<{
  user_id: string
  name: string
  email: string
  given_name: string
  family_name: string
  nickname: string
  last_ip: string
  logins_count: number
  created_at: string
  updated_at: string
  last_login: string
  email_verified: boolean
}> = fs.readFileSync('./data-json/user.data.json', {
  encoding: 'utf8',
})

export { data }
