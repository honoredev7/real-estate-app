import React from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, Table, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import './styles/properties.css';
import { MdDeleteForever } from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';

const Properties = () => {
  return (
    <div>
        <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card style={{padding:"0 16px"}}>
              <CardHeader>
                <h5 className="title">Mes Biens Immobiliers</h5>
              </CardHeader>
              <CardBody className="all-icons">
                {/* <Row>
                    <Card style={{padding:"0 16px"}}>
                        <div style={{display:"flex", width:"99%", justifyContent:"space-between"}}>
                            <div style={{fontSize:"2rem"}}>Villa</div>
                            <div style={{fontSize:"2rem"}}>Lomé-Togo</div>
                            <div style={{fontSize:"2rem"}}>2000 m2</div>
                            <div style={{justifyContent:"center", alignItems:"center", height:"100%"}}>
                                <button className="vente">Mettre en Vente</button>
                                <button className="location">Mettre en Location</button>
                                <button className="modifier">Modifier</button>
                                <button className="supprimer">Supprimer</button>
                            </div>
                        </div>
                    </Card>
                </Row> */}

                <Row>
                    <Card style={{padding:"0 16px"}}>
                        <div style={{display:"flex", width:"99%", justifyContent:"space-between"}}>
                            <div style={{fontSize:"2rem"}}>Villa</div>
                            <div style={{fontSize:"2rem"}}>Lomé-Togo</div>
                            <div style={{fontSize:"2rem"}}>2000 m2</div>
                            <div style={{justifyContent:"center", alignItems:"center", height:"100%"}}>
                                <button className="vente">Mettre en Vente</button>
                                <button className="location">Mettre en Location</button>
                                <span style={{marginLeft:"16px"}}>
                                    <FiEdit style={{fontSize:"2rem", margin:"0 4px", color:"grey"}} className="btn-icon" />
                                </span>

                                <span>
                                    <MdDeleteForever style={{fontSize:"2rem", marginLeft:"4px", color:"crimson"}} className="btn-icon" />
                                </span>
                            </div>
                        </div>
                    </Card>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Properties;
