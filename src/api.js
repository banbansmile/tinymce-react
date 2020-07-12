import request from './util/request'


const fileHeaders = { headers: { "Content-Type": "multipart/form-data" } }

export function uploadFile(params) {
    return request.post('/file/fileUpload', params, fileHeaders)
}
