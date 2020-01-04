import React from 'react'
import {
    Card, 
} from 'react-bootstrap'
import SubmitForm from './SubmitForm'

function ViewBox(props) {
    return (
        <Card style={{ margin: 'auto'}}>
            <Card.Body>
                <SubmitForm></SubmitForm>
            </Card.Body>
        </Card>
    );
}

export default ViewBox;