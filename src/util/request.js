import axios from 'axios'

let service = axios.create({
    baseURL: 'http://www.banbansmile.com/',
    //baseURL: 'http://127.0.0.1:8066',
    timeout: 30000,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

service.defaults.withCredentials = true

service.interceptors.request.use(
    config => {

        return config
    },
    error => {

    }
)


service.interceptors.response.use(
    response => {
        const res = response.data;
        return res
    },
    error => {
        return Promise.reject(error)
    }
)


export default service