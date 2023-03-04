import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Typography() {
  return (
    <>
      <PanelHeader size="sm" content={
          <div className="header text-center">
            <h2 className="title">Statistiques</h2>
            <p className="category">
              Veuillez consulter ci-dessous vos statistiques.
            </p>
          </div>
        } />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                
              </CardHeader>
              <CardBody>
                <div className="typography-line">
                 
                </div>
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                 
                </div>
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                 
                </div>
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                  
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."
                      <br />
                      <br />
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>

                <div className="typography-line">
                 
                </div>
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                 
                </div>
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                  
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
