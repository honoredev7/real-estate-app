import React from "react";

// reactstrap components
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useState, useEffect} from 'react';

import { popup } from "leaflet";

const MapWrapper = () => {
  const [position, setPosition] = useState([]);

	useEffect(() => {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				let latitude = position.coords.latitude;
				let longitude = position.coords.longitude;
				setPosition([latitude, longitude]);
			});
		}	
	}, [position]);

	// const Icon = () => {
	// 	return L.icon({
	// 	iconUrl: require('./marker.png'),
	// 	iconSize: [64,64],
	// 	iconAnchor: [32, 64],
	// 	popupAnchor: null,
	// 	shadowUrl: null,
	// 	shadowSize: null,
	// 	shadowAnchor: null
	// 	});
	// }

	let affichage = position.length !== 0 && (
		<MapContainer className="map"
			center={position}
			zoom={14}
			style={{height:"100vh", width:"100%"}}
      onClick={getCoordonnates} >

			<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{/* <Marker position={position} >
				<Popup>
					Vous êtes actuellement ici
				</Popup>
			</Marker> */}
      
		</MapContainer>
	);
	
	return (
		<div className="App">
			{affichage}
		</div>
	);
};

const map = document.querySelector("map");
const pop = L.popup();

const getCoordonnates = e => {
  pop.setLatLng(e.latlng)
        .setContent("Vos coordonnées : " + e.latlng.toString())
        .openOn(map);
  map.on('click', getCoordonnates)
  // console.log(e.latlng);
}

function FullScreenMap() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader style={{fontSize:22, fontWeight:900}}>Ma Carte Immobilière</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FullScreenMap;
