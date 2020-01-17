import axios from 'axios'

const PostFormApi = (req) => {
    console.log(req)
    if (!req || !req.documentType || !req.count || isNaN(req.count) || !req.userName) {
        console.log("oops")
        return {
            status: false,
            error: "bad request"
        }
    }

    axios.post('http://localhost:3001/documents', req)
        .then(resp => {
            console.log(resp);
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