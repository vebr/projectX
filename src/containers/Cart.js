import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
  }

  static defaultProps = {
    match: null,
  }

  render = () => {
    const { Layout } = this.props;

    return (
      <Layout
      />
    );
  }
}


export default CartListing;
