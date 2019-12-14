import React from 'react'
import {
    Navbar,
    NavDropdown,
    Nav,
} from 'react-bootstrap'

function NavigBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">主页</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link href="#generate">获取编号</Nav.Link>
                    <Nav.Link href="#query">查询编号</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href="#login">登录</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigBar;