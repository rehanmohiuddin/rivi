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
import Footer from "components/Footer/Footer.js"
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import "@fortawesome/fontawesome-free";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  
  
  UncontrolledTooltip,
  
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class NucleoIcons extends React.Component {
  render() {
    return (
      <div style={{marginTop:"5vh"}
      }  >
        <Container>
        <h1>Solar Power Packs</h1>
        <Row>
                <Col md="3">
                  <Card style={{marginTop:"5vh"}} className="card-coin card-plain">
                    <CardHeader>
                     
                    </CardHeader>
                    <CardBody>
                      <Row style={{marginTop:"10vh"}}>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Gates Engineering College,
                            gooty,Anathapur
                            </h4>
                          
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>100kwp
                            (Associated with Su-kam).
                            </ListGroupItem>
                         
                        </ListGroup>
                      </Row>
                    </CardBody>
                   
                  </Card>
                </Col>
                <Col md="3">
                  <Card style={{marginTop:"5vh"}} className="card-coin card-plain">
                    <CardHeader>
                     
                    </CardHeader>
                    <CardBody>
                      <Row style={{marginTop:"10vh"}}>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Vaagdevi College of Engineering, Bollikunta, Warangal.
                            </h4>
                          
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>100kwp
                           
                            </ListGroupItem>
                         
                        </ListGroup>
                      </Row>
                    </CardBody>
                   
                  </Card>
                </Col>
                <Col md="3">
                  <Card style={{marginTop:"5vh"}} className="card-coin card-plain">
                    <CardHeader>
                     
                    </CardHeader>
                    <CardBody>
                      <Row style={{marginTop:"10vh"}}>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Vaagdevi College of Engineering, Bollikunta, Warangal.( On Going)
                            </h4>
                          
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>200Kwp
                           
                            </ListGroupItem>
                         
                        </ListGroup>
                      </Row>
                    </CardBody>
                   
                  </Card>
                </Col>
                <Col md="3">
                  <Card style={{marginTop:"5vh"}} className="card-coin card-plain">
                    <CardHeader>
                     
                    </CardHeader>
                    <CardBody>
                      <Row style={{marginTop:"10vh"}}>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">
                          St. Martin’s Children Educational Society, Secunderabad.
                          (St. Martin’s Engineering College, Kompally, Medchal) (On Going )

                            </h4>
                          
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>130kwp
                           
                            </ListGroupItem>
                         
                        </ListGroup>
                      </Row>
                    </CardBody>
                   
                  </Card>
                </Col>
                <Col  md="3">
                  <Card style={{marginTop:"5vh"}} className="card-coin card-plain">
                    <CardHeader>
                     
                    </CardHeader>
                    <CardBody>
                      <Row style={{marginTop:"10vh"}}>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">KMR Educational Society (Marri Laxmareddy Institute of Technology (MLRIT), Dundigal, Quthbullapur, Hyderabad.) (On Going )
                            </h4>
                          
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>260Kwp
                           
                            </ListGroupItem>
                         
                        </ListGroup>
                      </Row>
                    </CardBody>
                   
                  </Card>
                </Col>

                <Col md="3">
                  <Card style={{marginTop:"5vh"}} className="card-coin card-plain">
                    <CardHeader>
                     
                    </CardHeader>
                    <CardBody>
                      <Row style={{marginTop:"10vh"}}>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">
                          Maruthi Educational Society(Institute of Aeronautical Engineering(IARE), ), Dundigal, Quthbullapur, Hyderabad.) (On Going )
                            </h4>
                          
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>160Kwp
                           
                            </ListGroupItem>
                         
                        </ListGroup>
                      </Row>
                    </CardBody>
                   
                  </Card>
                </Col>
                <Col md="3">
                  <Card style={{marginTop:"5vh"}} className="card-coin card-plain">
                    <CardHeader>
                     
                    </CardHeader>
                    <CardBody>
                      <Row style={{marginTop:"10vh"}}>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">
                          Marri Educational Society ( Marri Laxmareddy Institute of Tech and management(MLRITM),  Dundigal, Quthbullapur, Hyderabad.) (On Going )                            </h4>
                          
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>160Kwp
                           
                            </ListGroupItem>
                         
                        </ListGroup>
                      </Row>
                    </CardBody>
                   
                  </Card>
                </Col>
                <Col md="3">
                  <Card style={{marginTop:"5vh"}} className="card-coin card-plain">
                    <CardHeader>
                     
                    </CardHeader>
                    <CardBody>
                      <Row style={{marginTop:"10vh"}}>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">
                          Calvary Temple , Miyapur, Hyderabad  (Grid Tie systems, yet to start project)
                         </h4>
                          
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>300Kwp
                           
                            </ListGroupItem>
                         
                        </ListGroup>
                      </Row>
                    </CardBody>
                   
                  </Card>
                </Col>
               
              </Row>
        </Container>,<Footer />

        
      </div>
      



      
    );
  }
}

export default NucleoIcons;
