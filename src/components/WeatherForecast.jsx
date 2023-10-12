import { Accordion, Container } from "react-bootstrap";

export function WeatherForecast() {
  return (
    <Container>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Monday</Accordion.Header>
          <Accordion.Body>Accordiong text</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Tuesday</Accordion.Header>
          <Accordion.Body>Accordiong text</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Wednesday</Accordion.Header>
          <Accordion.Body>Accordiong text</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Thursday</Accordion.Header>
          <Accordion.Body>Accordiong text</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Friday</Accordion.Header>
          <Accordion.Body>Accordiong text</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Saturday</Accordion.Header>
          <Accordion.Body>Accordiong text</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sunday</Accordion.Header>
          <Accordion.Body>Accordiong text</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

