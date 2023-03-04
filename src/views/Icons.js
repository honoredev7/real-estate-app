import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Table, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import icons from "variables/icons";

function Icons() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Mes Locataires</h5>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  {/* {icons.map((prop, key) => {
                    return (
                      <Col
                        lg={2}
                        md={3}
                        sm={4}
                        xs={6}
                        className="font-icon-list"
                        key={key}
                      >
                        <div className="font-icon-detail">
                          <i className={"now-ui-icons " + prop} />
                          <p>{prop}</p>
                        </div>
                      </Col>
                    );
                  })} */}

                  <Table className="table table-striped" responsive>
                    <thead className="text-primary table-dark">
                      <tr>
                        <th>Nom</th>
                        <th>Prénom(s)</th>
                        <th>Appartement</th>
                        <th>Ville - Pays</th>
                        <th>Montant (/ Mois)</th>
                      </tr>
                    </thead>

                    <tbody style={{fontSize:16}}>
                      <tr>
                        <td>BOUBOU</td>
                        <td>Koffi</td>
                        <td>Villa9</td>
                        <td>Lomé - Togo</td>
                        <td>160 000 FCFA</td>
                      </tr>
                      <tr>
                        <td>BABA</td>
                        <td>Komi</td>
                        <td>Villa16</td>
                        <td>Kara - Togo</td>
                        <td>190 000 FCFA</td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
