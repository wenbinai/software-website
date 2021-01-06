import axios from 'axios'

const axiosInstance = axios.create({
        baseURL: 'http://47.110.43.41:80',
    }
)

export default axiosInstance
