import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import logo from './logo.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let Header = () => {
  return (
    <>
      <Navbar  className="header" bg="light" variant="light" sticky="top">
        <Container>
          <Row >
            <Col xs={3} sm={3} md={3} lg={5}>
              <Navbar.Brand href="#home">
                <img src={logo} className="logo" alt="CPFI logo" height="50vmin" justify-content="start"/>
              </Navbar.Brand>
            </Col>
            <Col xs={9} sm={8} md={8} lg={5}>
              <Navbar.Brand className="justify-content-center">
                <h1 className="title" justify-content-center>PRODUCT CATALOG</h1>
              </Navbar.Brand>
            </Col>
            <Col sm={1} md={1} lg={2}></Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
  
};
export default Header;