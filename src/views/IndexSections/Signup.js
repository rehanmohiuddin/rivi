/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Signup extends React.Component {
  state = {};
  render() {
    return (
      <div className="section section-signup">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="4">
              <h3 className="display-3 text-white">
                Contact Us{" "}
                <span className="text-white"></span>
              </h3>
              <p className="text-white mb-3">
               Any Queries Contact Us
              </p>
              <div className="btn-wrapper">
                <Button color="primary" to="register-page" tag={Link}>
                  Register Page
                </Button>
              </div>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              
                
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
