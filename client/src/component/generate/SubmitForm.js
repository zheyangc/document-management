import React from 'react'
import {
    Form,
    Button,
    Row, 
    Col,
} from 'react-bootstrap'

function SubmitForm(props) {
    return (
        <Form>
            <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                取号人
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="name" placeholder="Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalNmber">
                <Form.Label column sm={2}>
                数量
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Number" min='0'/>
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
                提交
            </Button>
        </Form>
    );
}

export default SubmitForm;