let fs = require('fs')

const data = fs.readFileSync('./data-json/user.data.json', {
  encoding: 'utf8',
})
const obj = JSON.parse(data)
export const getusers = () => {
  //array iin type iig ingj todorhoilnoo hu

  return obj
}
export const id_Search = (temp: any) => {
  for (let i = 0; i < 5; i++) {
    if (obj[i].user_id == temp) {
      console.log(obj[i])
      return obj[i]
    }
  }
}
