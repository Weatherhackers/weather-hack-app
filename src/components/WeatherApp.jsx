import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Condition from "./Condition";
import Icon from "./Icon";
import Temperature from "./Temperature";
import DateTime from "./DateTime";
import { Col, Container, Row } from "react-bootstrap";
import "./styling/WeatherApp.css";
import WeatherHack from "./WeatherHack";
import { WeatherDetails } from "./WeatherDetails";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  if (weatherData && weatherData.coord) {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <SearchBar
              weatherData={weatherData}
              setWeatherData={setWeatherData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Condition weatherData={weatherData} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Row>
              <DateTime weatherData={weatherData}/>
            </Row>
            <Row>
              <Icon weatherData={weatherData} />
            </Row>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <Temperature tempData={weatherData} />
            </Row>
            <Row>
              <WeatherDetails weatherData={weatherData} />
            </Row>
            <Row>
              <WeatherHack weatherData={weatherData} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  } else if (weatherData && weatherData.cod === "404") {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar setWeatherData={setWeatherData} />
          </Col>
        </Row>
        <Row>
          <h1 className="questionMark">?</h1>
          <h2>No data found</h2>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="landing">
        <Row>
          <Col>
            <h1 className="title">Weather Hackers</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchBar setWeatherData={setWeatherData} />
          </Col>
        </Row>
      </Container>
    );
  }
}
