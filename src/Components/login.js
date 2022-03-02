import React from 'react';
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import loginIcon from '../user.png'
import uImg from '../login.png'
import './Login.css'

export const Login = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon" />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit"> Login </Button>

                            <div className="text-left mt-3">
                                <a href='#'><small className="reset"> Password Reset || </small></a>
                                <a href='/Register'><small className="reset ml-2"> Register</small></a>
                            </div>

                        </Form>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <img className="w-100" src={uImg} alt="" />

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;