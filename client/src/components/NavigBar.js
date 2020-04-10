import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavigBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">主页</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/submit">获取编号</Nav.Link>
          <Nav.Link href="/search">查询编号</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#login">登录</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigBar;
