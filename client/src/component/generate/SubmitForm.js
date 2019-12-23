import React from 'react'
import {
    Form,
    Button,
    Row, 
    Col,
} from 'react-bootstrap'

class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <Form.Label>取号人</Form.Label>
                <Form.Control as="select">
                    <option disabled selected>请选择取号人</option>
                    <option>Amy</option>
                    <option>Bob</option>
                    <option>Cindy</option>
                    <option>Danny</option>
                    <option>Ella</option>
                </Form.Control>
                <Form.Label>数量</Form.Label>
                <Form.Control type="number"/>
                <Button type="submit">提交</Button>
            </Form>
        );
    }
}

export default SubmitForm;