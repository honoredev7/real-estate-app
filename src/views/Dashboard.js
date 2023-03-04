import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "../components/PanelHeader/PanelHeader.js";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "variables/charts.js";

import {CalendarComponent} from "@syncfusion/ej2-react-calendars";
import {ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category} from '@syncfusion/ej2-react-charts';
import {data} from './data';
import './styles/style.css';

function Dashboard() {
  const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay);
  return (
    <div>
      <PanelHeader
        size="lg"
        content={
          <Line
            data={dashboardPanelChart.data}
            options={dashboardPanelChart.options}
          />
        }
      />
      <div className="content">
        <Row>
          <Col xs={12} md={3}>
            <Card className="card-chart" style={{userSelect:"none", borderRadius:"9px", height:"100px", fontFamily:"Fira sans"}}>
              <CardHeader>
                <h5 className="card-category"></h5>
                <CardTitle tag="h4">Nombre total de bien(s)</CardTitle>
                <div style={{fontSize:"2rem"}}>16</div>
              </CardHeader>
              {/* <CardBody>
                <div className="chart-area">
                  <Line
                    data={dashboardShippedProductsChart.data}
                    options={dashboardShippedProductsChart.options}
                  />
                </div>
              </CardBody> */}
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card className="card-chart" style={{userSelect:"none", borderRadius:"9px", height:"100px", fontFamily:"Fira sans"}}>
              <CardHeader>
                <CardTitle tag="h4">Revenu du mois</CardTitle>
              </CardHeader>
              {/* <CardBody>
                <div className="chart-area">
                  
                </div>
              </CardBody> */}
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card className="card-chart" style={{userSelect:"none", borderRadius:"9px", height:"100px", fontFamily:"Fira sans"}}>
              <CardHeader>
                <CardTitle tag="h4">Dépenses du mois</CardTitle>
              </CardHeader>
              {/* <CardBody>
                <div className="chart-area">
                  
                </div>
              </CardBody> */}
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card className="card-chart" style={{userSelect:"none", borderRadius:"9px", height:"100px", fontFamily:"Fira sans"}}>
              <CardHeader>
                <CardTitle tag="h4">Taxes Foncières</CardTitle>
              </CardHeader>
              {/* <CardBody>
                <div className="chart-area">
                </div>
              </CardBody> */}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            {/* <Card>
              <CardHeader>
                <CardTitle tag="h4">Liste des Locataires</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="table table-striped" responsive>
                  <thead className="table-black" style={{backgroundColor:"#2CA8FE"}}>
                    <tr style={{color:"#FFF", fontWeight:900}}>
                      <th>Nom et Prénom(s)</th>
                      <th>Pays</th>
                      <th>Ville</th>
                      <th className="text-right">Etat de Payement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">Payé</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-right">Payé</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-right">En Attente</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-right">Payé</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-right">Payé</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card> */}
            <Card style={{userSelect:"none", borderRadius:"9px", height:"460px", fontFamily:"Fira sans"}}>
              {/* <CardHeader>
                <CardTitle tag="h4" style={{marginBottom:"0px"}}>
                Chiffre d'affaires annuel
                </CardTitle>
              </CardHeader> */}
                <CardBody>
                  <ChartComponent primaryXAxis={{valueType: "Category"}} title="Chiffre d'affaires annuel">
                    <Inject services={[LineSeries, Category]}></Inject>
                    <SeriesCollectionDirective>
                      <SeriesDirective type="Line" dataSource={data} xName="month" yName="sales"></SeriesDirective>
                    </SeriesCollectionDirective>
                  </ChartComponent>
                </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{userSelect:"none", borderRadius:"9px", height:"460px", fontFamily:"Fira sans"}}>
              <CardHeader>
                <CardTitle tag="h4">Calendrier</CardTitle>
              </CardHeader>
              <CardBody>
                <CalendarComponent value={dateValue} ></CalendarComponent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Dashboard;
