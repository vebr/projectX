import React from 'react';
import { Row, Jumbotron } from 'reactstrap';

const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white w-100">
        <h1>
          Project X
        </h1>
        <p className="lead">
          Trying to solve:
        </p>
        <ol>
          <li>Architect services are expensive</li>
          <li>Make everyone can use the services of an architect</li>
          <li>Selling versatile furniture</li>
        </ol>
      </Jumbotron>
    </Row>
  </div>
);

export default About;
