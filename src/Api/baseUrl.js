import axios from 'axios'
const baseUrl  = axios.create({baseURL : 'https://api.lepgo.online'})
export default  baseUrl;