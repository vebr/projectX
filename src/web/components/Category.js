import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  // Card,
  // CardText,
  // CardBody,
  // CardHeader,
  // ListGroup,
  // ListGroupItem,
} from 'reactstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ErrorMessages from '../../constants/errors';
import Loading from './Loading';
import Error from './Error';

const CategoryViewComponent = ({
  error,
  loading,
  categories,
  categoryId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Recipe from all recipes
  let category = null;
  if (categoryId && categories) {
    category = categories.find(item => parseInt(item.id, 10) === parseInt(categoryId, 10));
  }

  // Recipe not found
  if (!category) return <Error content={ErrorMessages.category404} />;

  return (
    <div>
      <Helmet>
        <title>{category.title}</title>
      </Helmet>

      <Row>
        <Col sm="12">
          <h1>
            {category.title}
          </h1>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-secondary" to="/category">
            <i className="icon-arrow-left" />
            {' '}
            Back
          </Link>
        </Col>
      </Row>
    </div>
  );
};

CategoryViewComponent.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  categoryId: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

CategoryViewComponent.defaultProps = {
  error: null,
};

export default CategoryViewComponent;
