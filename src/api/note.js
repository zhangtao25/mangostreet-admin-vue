import api from './index'
import { axios } from '@/utils/request'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */

let ip = "http://mangostreet.top:8000"
function getAllNote (parameter) {
  return axios({
    url: ip + '/note',
    method: 'get',
    data: parameter
  })
}

function addNote (parameter) {
  return axios({
    url: ip + '/note',
    method: 'post',
    data: parameter
  })
}


// {
//   "noteId":"12",
//   "noteType":"3333",
//   "noteTitle":"sfasfas",
//   "noteDescription":"fadsfsdgds",
//   "noteContent":"fgadsfdsfds",
//   "userId":
// }

export default {
  getAllNote,
  addNote
}