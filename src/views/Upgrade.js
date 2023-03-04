import React, { Component } from "react";

// reactstrap components
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Upgrade() {
  const styles={background:"none", 
                border:"none", 
                appearance:"none", 
                outline:"none", 
                cursor:"pointer",
                fontSize:"2rem"
        };

  return (
    <>
      <PanelHeader size="sm" content={
          <div className="header text-center">
            <h2 className="title">Vos Paramètres</h2>
            <p className="category">Vous pouvez modifier les réglages de votre compte ici</p>
          </div>
        } />
      <div className="content">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle style={{fontSize:25}}>Paramètres</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th />
                      {/* <th className="text-center">Free</th>
                      <th className="text-center">PRO</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <button style={styles}>Identification et Sécurité</button>
                      {/* <td>Components</td> */}
                      {/* <td className="text-center">16</td>
                      <td className="text-center">160</td> */}
                    </tr>
                    <hr />
                    <tr>
                    <button style={styles}>Préférences du compte</button>
                      {/* <td>Plugins</td>
                      <td className="text-center">5</td>
                      <td className="text-center">13</td> */}
                    </tr>
                    <hr />
                    <tr>
                    <button style={styles}>Confidatialité des données</button>
                      {/* <td>Example Pages</td>
                      <td className="text-center">7</td>
                      <td className="text-center">27</td> */}
                    </tr>
                    {/* <tr>
                      <td>Documentation</td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td>SASS Files</td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td>Login/Register/Lock Pages</td>
                      <td className="text-center">
                        <i className="fa fa-times text-danger" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td>Premium Support</td>
                      <td className="text-center">
                        <i className="fa fa-times text-danger" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td className="text-center">Free</td>
                      <td className="text-center">From $59</td>
                    </tr> */}
                    <tr>
                      <td />
                      <td className="text-center">
                        <Button href="#" color="default" className="btn-round" style={{fontSize:14}}>
                          Revenir aux paramètres par défaut
                        </Button>
                      </td>
                      <td className="text-center">
                        <Button
                          target="_blank"
                          href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react/?ref=nudr-upgrade"
                          color="info"
                          className="btn-round"
                          style={{fontSize:14}}
                        >
                          Enrégistrer les modifications
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Upgrade;
