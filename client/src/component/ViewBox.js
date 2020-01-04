import React from 'react'
import {
    Card, 
} from 'react-bootstrap'
import SubmitForm from './SubmitForm'
import SubmitResult from './SubmitResult'

function ViewBox(props) {
    return (
        <Card style={{ margin: 'auto'}}>
            <Card.Body>
                <SubmitForm></SubmitForm>
                <SubmitResult></SubmitResult>
            </Card.Body>
        </Card>
    );
}

export default ViewBox;