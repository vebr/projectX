import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from './Error';

const CategoryListing = ({ error, loading, categories }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = categories.map(item => (
    <Card key={`${item.id}`}>
      <CardBody>
        <CardTitle>
          {item.title}
        </CardTitle>
        <Link className="btn btn-primary" to={`/categories/${item.id}`}>
          View Category
          {' '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>
            Category
          </h1>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </div>
  );
};

CategoryListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

CategoryListing.defaultProps = {
  error: null,
};

export default CategoryListing;
