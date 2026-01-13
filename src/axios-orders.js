import axios from "axios"

const instance = axios.create({
  baseURL: 'https://console.firebase.google.com/u/0/project/react-redux-main-70385/database/react-redux-main-70385-default-rtdb/data'
})

export default instance