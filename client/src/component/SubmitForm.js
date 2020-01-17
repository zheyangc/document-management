import React from 'react'
import {
    Form,
    Button,
} from 'react-bootstrap'



class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    // handleSubmit = submitForm(this.state.name, this.state.number);

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Label>取号人</Form.Label>
                <Form.Control name="name" value={this.state.name} onChange={this.handleChange}/>

                <Form.Label>数量</Form.Label>
                <Form.Control name="number" value={this.state.number} onChange={this.handleChange}/>

                <Button type="submit">提交</Button>
            </Form>
        );
    }
}

export default SubmitForm;