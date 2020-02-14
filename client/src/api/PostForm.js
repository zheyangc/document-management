import axios from 'axios'
import ConfigValues from '../common/ConfigValues'

const PostFormApi = async (req) => {
    if (!req || !req.documentType || !req.count || isNaN(req.count) || !req.userName) {
        return {
            status: false,
            error: "bad request"
        }
    }
    try {
        let resp = await axios.post(ConfigValues.DOCUMENT_SERVICE_PATH+':3001/documents', req);
        let res = [];
    for (let i = 0; i < resp.data.length; i++) {
        res.push(resp.data[i].documentNumber)
    }
    return {
        status: true,
        res
    }
    } catch (err) {
        return {
            status: false,
            error: err
        }
    }    
}

export default PostFormApi;