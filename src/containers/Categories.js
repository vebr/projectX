import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCategories, setError } from '../actions/category';

class CategoryListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    fetchCategories: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchCategories();

  fetchCategories = () => {
    const { fetchCategories, showError } = this.props;
    return fetchCategories()
      .catch((err) => {
        console.log(`Error: ${err}`);
        return showError(err);
      });
  }

  render = () => {
    const { Layout, categories, match } = this.props;
    const id = (match && match.params && match.params.categoryId) ? match.params.categoryId : null;

    return (
      <Layout
      categoryId={id}
      error={categories.error}
      loading={categories.loading}
      categories={categories.categories}
      reFetch={() => this.fetchCategories()}
      />
    );
  }
}

const mapStateToProps = state => ({
    categories: state.categories || {},
});

const mapDispatchToProps = {
  fetchCategories: getCategories,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListing);
