import axios from 'axios'

const PostFormApi = async (req) => {
    if (!req || !req.documentType || !req.count || isNaN(req.count) || !req.userName) {
        return {
            status: false,
            error: "bad request"
        }
    }

    let resp = await axios.post('http://localhost:3001/documents', req);
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
}

export default PostFormApi;