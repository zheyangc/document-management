import React from 'react'

import {
    Alert
} from 'react-bootstrap'

const printResult = (array) => {
    let res = "";
    let length = array.length;
    for (let i = 0; i < length; i++) {
        res += array[i]
        if (i !== length - 1) {
            res += ", ";
        }
    }
    return res;
}

function SubmitResult(props) {
    if (props.submitted) {
        if (props.result.status) {
            return (
                <Alert className="m-auto p-auto" variant='success'>
                    提交成功, 编号为{printResult(props.result.res)}
                </Alert>
            );
        } else {
            return (
                <Alert className="m-auto p-auto" variant='danger'>
                    提交失败, {props.result.error.toString()}
                </Alert>
            )
        }
        
    }
    return null;
}

export default SubmitResult;