import React from 'react'
import {
    Form,
    Button,
} from 'react-bootstrap'

class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            count: "",
            documentType: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Form>
                <Form.Label>类型</Form.Label>
                    <Form.Control as="select" name="documentType" value={this.state.documentType} onChange={this.handleChange}>
                        <option value = "" disabled>请选择...</option>
                        <option value="shiXianGaoZhiShu">事先告知书</option>
                        <option value="tingZhengGaoZhiShu">听证告知书</option>
                        <option value="songDaHuiZheng">送达回证</option>
                    </Form.Control>

                <Form.Label>取号人</Form.Label>
                <Form.Control name="userName" value={this.state.userName} onChange={this.handleChange}/>

                <Form.Label>数量</Form.Label>
                <Form.Control name="count" value={this.state.count} onChange={this.handleChange}/>

                <Button type="submit" onClick = {() => this.props.handleSubmit(this.state)}>提交</Button>
            </Form>
        );
    }
}

export default SubmitForm;