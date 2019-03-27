import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/TemplateNothing';
import TemplateSidebar from '../components/TemplateSidebar';

// Routes
import Home from '../components/Home';

import CartContainer from '../../containers/Cart';
import Cart from '../components/Cart';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import CategoryContainer from '../../containers/Categories';
import CategoryComponent from '../components/Categories';
import CategoryViewComponent from '../components/Category';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import Error from '../components/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/sign-up"
      render={props => (
        <TemplateSidebar pageTitle="Sign Up">
          <SignUpContainer {...props} Layout={SignUpComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateSidebar pageTitle="Login">
          <LoginContainer {...props} Layout={LoginComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/forgot-password"
      render={props => (
        <TemplateNothing pageTitle="Forgot Password">
          <ForgotPasswordContainer {...props} Layout={ForgotPasswordComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/update-profile"
      render={props => (
        <TemplateSidebar pageTitle="Update Profile">
          <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/cart"
      render={props => (
        <TemplateSidebar pageTitle="Cart" path="/cart" >
          <CartContainer {...props} Layout={Cart}/>
        </TemplateSidebar>
      )}
    />
    <Route
      path="/recipes"
      render={props => (
        <TemplateSidebar pageTitle="Recipes">
          <RecipesContainer {...props} Layout={RecipesComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/category"
      render={props => (
        <TemplateSidebar pageTitle="Category">
          <CategoryContainer {...props} Layout={CategoryComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/categories/:categoryId"
      render={props => (
        <TemplateSidebar pageTitle="Category View">
          <CategoryContainer {...props} Layout={CategoryViewComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/recipe/:id"
      render={props => (
        <TemplateSidebar pageTitle="Recipe View">
          <RecipesContainer {...props} Layout={RecipeViewComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar pageTitle="404 - Page note found">
          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
