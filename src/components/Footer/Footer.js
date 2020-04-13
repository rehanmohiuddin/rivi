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
import "@fortawesome/fontawesome-free";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <img alt=""
              src={require("assets/img/g.png")}/>
              <h3 className="title" style={{textAlign:"center",fontWeight: 'bold',
    fontSize: 18,
    marginTop: "25px",
    marginLeft:"55px"
    }}>RIVIN ENERGY
              INFRA PVT LTD
              </h3>
             
            </Col>
            
            <Col md="3">
              <Nav>
                <NavItem style={{marginTop:"-42px"}}>
                
                  <NavLink href="https://www.google.co.in/maps/place/Mithra+Solar+Systems/@17.499012,78.4761874,15z/data=!4m5!3m4!1s0x0:0x174a6adc242536b4!8m2!3d17.499012!4d78.4761874">
    {<i className="fas fa-location-arrow btn-icon btn-neutral btn-round btn-simple"/>},{<p style={{margintop:"10px"},{display:"inline"}}> {<h4  style={{marginTop:"10px"}}>Registered Address: </h4>}H.no. 6-01/1/1/8, 1st Floor,Venkateshwara Enclave, NH-7 Suchitra X Roads, Quthbullapur, Hyderabad, Telangana 500067</p>} 
                  
                    
                  
                  </NavLink>
                </NavItem>
                
                <NavItem style={{marginTop:"10px"}}>
                
                  <NavLink href="https://www.google.co.in/maps/@19.1973762,72.9745602,15z">
    {<p style={{margintop:"10px"},{display:"inline"}}> {<h4  style={{marginTop:"-15px"}}>CORP Address: </h4>}NO.8,1st Floor,Anklesaria Building,Edulji Road,Charai,Thane (W)-400601</p>} 
                  
                    
                  
                  </NavLink>
                </NavItem>
                
                
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
              <NavItem style={{marginTop:"-8px"}}>
                
                <NavLink href="tel:+919849362345">
                {<i class="fas fa-phone-volume btn-icon btn-neutral btn-round btn-simple" />},{<p style={{margintop:"10px"},{display:"inline"}}> {<h6  style={{marginTop:"10px"}}>Phone: </h6>}+91 9849362345</p>} 
                

                
                </NavLink>
              </NavItem>
              <NavItem style={{marginTop:"-8px"}}>
                
                <NavLink href="mailto:info@rivinenergy.com">
              {<i class="fas fa-envelope-square btn-icon btn-neutral btn-round btn-simple" />},{<p style={{margintop:"10px"},{display:"inline"}}> {<h6  style={{marginTop:"10px"}}>Email: </h6>}info@rivinenergy.com</p>} 
                
                  
                
                </NavLink>
              </NavItem>
               
              </Nav>
              
            </Col>
            <Col md="3">
              
            <h3 style={{textAlign:"center",fontWeight: 'bold',
    
    }} className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="/"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="/"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="/"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-dribbble" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Follow us
                </UncontrolledTooltip>
              </div>
              
            </Col>
          </Row>
          
        </Container>
      </footer>
    );
  }
}

export default Footer;
