import React, { useContext } from 'react';
import './styling/SearchBar.css';
import { ApiContext } from '../contexts/ApiContext';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

export default function SearchBar({ setWeatherData }) {

  // API URL
  const {api} = useContext(ApiContext);

  // API key
  let apiKey = process.env.REACT_APP_API_KEY;

  // Search function
  const search = async (event) => {
    event.preventDefault();
    let element = document.getElementById("searchField");
    if (element.value === "") {
      return 0;
    }
    let url = `${api}/weather?q=${element.value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    // Update weatherData in the WeatherApp component
    setWeatherData(data);
  }

  return (
    <Form onSubmit={search} id="searchForm">
      <Container>
        <Row>
          <Col>
            <FormControl
              size="lg"
              type="text"
              className="shadow-sm"
              name="searchField"
              id="searchField"
              placeholder="Search a city"
            />
          </Col>
          <Col xs={1}>
            <Button size="lg" className="shadow-sm" id="searchIconBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search searchIcon"
                viewBox="0 0 16 16"
              >
                <path  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}