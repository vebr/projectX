import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="mt-5">
    <Row>
      <Col sm="12" className="text-right pt-3">
        <p>
          Written and Maintained by
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://vebr.github.io">
            Veddha Edsa
          </a>
          .
        </p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
