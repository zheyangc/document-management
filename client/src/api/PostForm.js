import axios from 'axios'

const PostFormApi = (req) => {
    if (!req || !req.documentType || !req.count || isNaN(req.count) || !req.userName) {
        return {
            status: false,
            error: "bad request"
        }
    }

    axios.post('http://localhost:3001/documents', req)
        .then(resp => {
            if (resp.data.error) {
                return {
                    status: false,
                    error: resp.data.msg
                }
            }
            let res = [];
            for (let i = 0; i < resp.data.length; i++) {
                res.push(resp.data[i].documentNumber)
            }
            return {
                status: true,
                res
            }
        })
        .catch(error => {
            console.log(error)
            return {
                status: false,
                error: error
            }
        })
}

export default PostFormApi;