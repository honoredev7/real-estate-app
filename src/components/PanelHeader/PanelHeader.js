import React from "react";

import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";

import {Route} from 'react-router-dom'

function PanelHeader(props) {
  return (
    // <div
    //   className={
    //     "panel-header " +
    //     (props.size !== undefined ? "panel-header-" + props.size : "")
    //   }
    // >
    //   {props.content}
    // </div>
    
    <div>
      <Row style={{height:160}}>
        <Card style={{backgroundColor:"#2CA8FE"}}>
          <CardHeader style={{margin:"1rem"}}>
            <CardTitle tag="h4" style={{fontSize:22, fontWeight:900, color:"white", padding:"2rem", marginTop:0}}>

              {window.location.pathname === "/admin/dashboard" ? "Tableau de Bord" : ""}
            
              {window.location.pathname === "/admin/notifications" ? 
              (<div>
                {props.content}
              </div>)
              : null}

              {window.location.pathname === "/admin/typography" ?
                (<div>
                  {props.content}
                </div>)
                : null}

              {window.location.pathname === "/admin/upgrade" ?
                (<div>
                  {props.content}
                </div>)
                : null}
            </CardTitle>
          </CardHeader>
        </Card>
      </Row>
    </div>
  );
}

export default PanelHeader;
