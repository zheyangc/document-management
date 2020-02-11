import React from 'react'

import {
    Alert
} from 'react-bootstrap'

function SubmitResult(props) {
    if (props.submitted) {
        return (
        <Alert variant='success'>
            成功提交, 编号为{}
        </Alert>);
    }
    return null;
}

export default SubmitResult;