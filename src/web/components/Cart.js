import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

const Cart = ({ title, content }) => (
  <Row>
    <Col lg="4">
      <h1>
        CART
      </h1>
      <p>
        This is Cart
      </p>
    </Col>
  </Row>
);

Cart.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
};

Cart.defaultProps = {
  title: 'Uh oh',
  content: 'An unexpected error came up',
};

export default Cart;
