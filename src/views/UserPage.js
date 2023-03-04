import React from "react";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Row,
	Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function User() {
	return (
		<>
			<PanelHeader size="sm" />
			<div className="content">
				<Row md="12">
					<Card className="card-user">
						<div className="image">
							<img alt="..." src={require("assets/img/bg5.jpg").default} />
						</div>
						<CardBody style={{height: 77}}>
							<div className="author">
								<a href="#pablo" onClick={(e) => e.preventDefault()}>
									<img
										alt="..."
										className="avatar border-gray"
										src={require("assets/img/mike.jpg").default}
									/>
									<h5 className="title">Mike Andrew</h5>
								</a>
								<p className="description">michael24</p>
							</div>
							<p className="description text-center">
								"Lamborghini Mercy Your chick she so thirsty <br />
								I'm in that two seat Lambo"
							</p>
						</CardBody>
						<hr />
						<div className="button-container">
							<Button
								className="btn-neutral btn-icon btn-round"
								color="default"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
								size="lg"
							>
								<i className="fab fa-facebook-f" />
							</Button>
							<Button
								className="btn-neutral btn-icon btn-round"
								color="default"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
								size="lg"
							>
								<i className="fab fa-twitter" />
							</Button>
							<Button
								className="btn-neutral btn-icon btn-round"
								color="default"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
								size="lg"
							>
								<i className="fab fa-google-plus-g" />
							</Button>
						</div>
					</Card>
				</Row>
				<Row>
					<Col md="12">
						<Card>
							<CardHeader>
								<h5 className="title">Vos Informations</h5>
							</CardHeader>
							<CardBody>
								<Form>
									<Row>
										<Col className="pr-1" md="5">
											<FormGroup>
												<label>Entreprise</label>
												<Input
													defaultValue="Creative Code Inc."
													disabled
													placeholder="Company"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="px-1" md="3">
											<FormGroup>
												<label>Nom d'utilisateur</label>
												<Input
													defaultValue="michael23"
													placeholder="Username"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="pl-1" md="4">
											<FormGroup>
												<label htmlFor="exampleInputEmail1">
													Adresse Email
												</label>
												<Input placeholder="Email" type="email" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className="pl-1" md="6">
											<FormGroup>
												<label>Nom</label>
												<Input
													defaultValue="Andrew"
													placeholder="Last Name"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="pr-1" md="6">
											<FormGroup>
												<label>Prénom(s)</label>
												<Input
													defaultValue="Mike"
													placeholder="Company"
													type="text"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="12">
											<FormGroup>
												<label>Addresse</label>
												<Input
													defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
													placeholder="Home Address"
													type="text"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className="pr-1" md="4">
											<FormGroup>
												<label>Ville</label>
												<Input
													defaultValue="Mike"
													placeholder="City"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="px-1" md="4">
											<FormGroup>
												<label>Pays</label>
												<Input
													defaultValue="Andrew"
													placeholder="Country"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="pl-1" md="4">
											<FormGroup>
												<label>Code Postale</label>
												<Input placeholder="ZIP Code" type="number" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="12">
											<FormGroup>
												<label>A propos de vous</label>
												<Input
													cols="80"
													defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
														that two seat Lambo."
													placeholder="Ici vous pouvez donner une description de vous"
													rows="4"
													type="textarea"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Button
                          target="_blank"
                          href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react/?ref=nudr-upgrade"
                          color="info"
                          className="btn-round"
                          style={{fontSize:14}}
                        >
                          Modifier les Informations
                        </Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
					
				</Row>
			</div>
		</>
	);
}

export default User;
