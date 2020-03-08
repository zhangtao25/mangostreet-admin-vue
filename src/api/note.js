import axios from 'axios'

function test() {
  return new Promise((resolve, reject) => {
    axios.get('/api/note').then(res=>{
      console.log(res)
      resolve(res)
    })

  })
}

export default {
  test
}