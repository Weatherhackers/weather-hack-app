import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WindSpeed from "./WindSpeed";
import WeatherHumidity from "./WeatherHumidity";
import Condition from "./Condition";
import Icon from "./Icon";
import Temperature from "./Temperature";
import DateTime from "./DateTime";
import { Col, Container, Row } from "react-bootstrap";
import './styling/WeatherApp.css';
import WeatherHack from "./WeatherHack";
import { WeatherForecast } from "./WeatherForecast";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  if (weatherData && weatherData.coord) {
    return (
        <Container>
            <Row>
                <Col>
                    <SearchBar setWeatherData={setWeatherData} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Condition weatherData={weatherData} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <DateTime />
                </Col>
                <Col>
                    <Temperature tempData={weatherData} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Icon weatherData={weatherData} />
                </Col>
                <Col>
                    <WindSpeed windData={weatherData && weatherData.wind} />
                    <WeatherHumidity weatherData={weatherData} />
                    <WeatherHack weatherData={weatherData} />
                </Col>
            </Row>
            <Row>
              <WeatherForecast />
            </Row>
        </Container>
    );
  } else if (weatherData && weatherData.cod === "404") {
    return (
      <div>
        <div>
          <SearchBar setWeatherData={setWeatherData} />
        </div>
        <h1 className="questionMark">?</h1>
        <h2>No data found</h2>
      </div>
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
