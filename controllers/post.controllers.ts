let fs = require('fs')
//array iin type iig ingj todorhoilnoo hu
const post_data: Array<{
  id: string
  title: string
  author: string
  content: string
}> = fs.readFileSync('./data-json/post.data.json', {
  encoding: 'utf8',
})

export { post_data }
