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
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">WHY DO CLIENTS PREFER TO WORK WITH RIVIN
</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="10">
              
              <Card>
               
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                      Why do clients prefer to work with Rivin Solar to address their Energy requirements, domestic and commercial? A number of reasons, the most significant of which is the fact that any issue pertaining to Solar Energy can be comprehensively dealt with through a single window. There will be no questions left unanswered, no doubts unclarified and no tasks left undone. <br />
                        <br />
                        When Mithraa Solar takes up a project, there is no one else you need to consult for clarifications, purchases, installation, testing and maintenance, it's all our responsibility
                      </p>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
