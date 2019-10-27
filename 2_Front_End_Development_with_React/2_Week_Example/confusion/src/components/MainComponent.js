import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />

          { /* If "exact" is not set, "/menu/xy" will match */ }
          <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} /> } />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;
