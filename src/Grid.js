import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck";
import { Container, Row, Col } from "react-bootstrap";
import CoronaGraph from "./CoronaGraph";
const Site = props => (
  <Container fluid>
    <h1 className="masthead">COVID-19 - Canada</h1>
    <CardDeck>
      <Card
        bg="secondary"
        text="white"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Card.Title>Cases</Card.Title>
          <Card.Text>{props.cases}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Today : {props.today}</small>
        </Card.Footer>
      </Card>
      <Card
        bg="danger"
        text={"white"}
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Card.Title>Deaths</Card.Title>
          <Card.Text>{props.deaths}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Fatality Rate : {((props.deaths * 100) / props.cases).toFixed(2)}%</small>
        </Card.Footer>
      </Card>
      <Card
        bg="success"
        text={"white"}
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Card.Title>Recovered</Card.Title>
          <Card.Text>{props.recovered}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Recovery Rate : {((props.recovered * 100) / props.cases).toFixed(2)}%</small>
        </Card.Footer>
      </Card>
    </CardDeck>

    <Row>
      <Col>&nbsp;</Col>
      <Col sm={6}>
        <h3 className="centertext">Corona Graph</h3>
        <CoronaGraph timeline={props.timeline} />
      </Col>
      <Col>&nbsp;</Col>
    </Row>
    <hr />
    <Row>
      <Col>&nbsp;</Col>

      <Col sm={6} className="worldstats centertext">
        <h2>Covid-19 World Stats</h2>
        <h4>Total Cases: {props.world.cases}</h4>
        <h4 className="deaths">Deaths: {props.world.deaths}</h4>
        <h4 className="recovered">Recovered: {props.world.recovered}</h4>
        <p>Updated at : {new Date(props.world.updated).toLocaleTimeString()}</p>
      </Col>
      <Col>&nbsp;</Col>
    </Row>

  </Container>
);
export default Site;
