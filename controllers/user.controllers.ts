let fs = require('fs')

const get_data = () => {
  const data = fs.readFileSync('./data-json/user.data.json', {
    encoding: 'utf8',
  })
  const obj = JSON.parse(data)
  return obj
}

export const get_users = () => {
  const obj = get_data()

  //array iin type iig ingj todorhoilnoo hu

  return obj
}

export const id_search = (temp: any) => {
  const obj = get_data()

  for (let i = 0; i < 5; i++) {
    if (obj[i].user_id == temp) {
      console.log(obj[i])
      return obj[i]
    }
  }
}
