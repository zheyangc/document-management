import React from 'react'
import {
    Card, 
} from 'react-bootstrap'
import SubmitForm from './SubmitForm'
import SubmitResult from './SubmitResult'
import PostFormApi from '../api/PostForm'

class ViewBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            submitted: false,
        }
    }

    handleSubmit = async (form) => {
        await PostFormApi(form);
        this.setState({submitted: true})
    }

    render () {
        return (
            <Card style={{ margin: 'auto'}}>
                <Card.Body>
                    <SubmitForm handleSubmit = {this.handleSubmit}></SubmitForm>
                    <SubmitResult submitted = {this.state.submitted}></SubmitResult>
                </Card.Body>
            </Card>
        );
    }
}

export default ViewBox;