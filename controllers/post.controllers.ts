let fs = require('fs')
const data = fs.readFileSync('./data-json/post.data.json', {
  encoding: 'utf8',
})
export const getposts = () => {
  const obj: any = JSON.parse(data)
  return obj
}
export const postid_Search = (temp_id: string) => {
  const obj: any = JSON.parse(data)
  console.log(temp_id)
  for (let i = 0; i < 10; i++) {
    // === == ylgaa file uuda negtege
    // === gesen chin bolku bsn hernee == gsm chin bolson
    if (obj[i].id == temp_id) {
      return obj[i]
    }
  }
}
