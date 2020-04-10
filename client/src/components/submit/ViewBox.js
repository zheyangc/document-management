import React from 'react'
import {
    Card, 
} from 'react-bootstrap'
import SubmitForm from './SubmitForm'
import SubmitResult from './SubmitResult'
import PostFormApi from '../../api/PostForm'

class ViewBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            submitted: false,
            res: null
        }
    }

    handleSubmit = async (form) => {
        let res = await PostFormApi(form);
        this.setState({
            res,
            submitted: true
        });
    }

    render () {
        return (
            <Card className="mx-auto my-5 w-75" style={{ margin: 'auto'}}>
                <Card.Body>
                    <SubmitForm handleSubmit = {this.handleSubmit}></SubmitForm>
                    <SubmitResult submitted = {this.state.submitted} result = {this.state.res}></SubmitResult>
                </Card.Body>
            </Card>
        );
    }
}

export default ViewBox;