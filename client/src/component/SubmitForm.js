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
            number: event.target.value
        });
    }

    handleSelect = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    handleSubmit = () => {
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Label>取号人</Form.Label>
                <Form.Control as="select" value={this.state.name} onChange={this.handleSelect}>
                    <option value="">请选择取号人...</option>
                    <option value="amy">Amy</option>
                    <option value="bob">Bob</option>
                </Form.Control>

                <Form.Label>数量</Form.Label>
                <Form.Control value={this.state.number} onChange={this.handleChange}/>

                <Button type="submit">提交</Button>
            </Form>
        );
    }
}

export default SubmitForm;