import axios from 'axios'
import {
	MessageBox,
	Message
} from 'element-ui'

// create an axios instance
//创建axios实例
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	/* withCredentials:true, */
	timeout: 20000
})
export default service
