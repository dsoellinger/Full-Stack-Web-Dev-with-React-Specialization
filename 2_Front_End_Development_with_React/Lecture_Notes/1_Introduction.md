### Framework vs Library

**Library**

- Collection of implementations of behavior/functionalities with a well-defined interface by which the behavior is invoked
- Easy reuse of behavior/functionality
- Modularity
- Your code is in charge and calls the library
- Example: jQuery

**Framework** 

- Software that provides generic functionality that can be selectively changed by additional user-written code. The framework defines a standard set of behaviors that can be customized to implement a specific application.

- The framework clearly defines how the application should be implemented (we are constrained by the framework)

- **Hollywood Principle:** Don't call us, we'll call you!

  The framework is in charge and calls your custom code

- Inversion of Control

- Example: Angular, Ember, Backbone



### YARN - Package Manager 

Yarn is another package manager like NPM, but is better suited and faster to work with for React applications. Yarn has a few differences from npm. Yarn caches all installed packages. Yarn is installing the packages simultaneously, and that is why Yarn is faster than NPM. They both download packages from npm repository. Yarn generates yarn.lock to lock down the versions of package’s dependencies by default. 

#### Install packages

Packages in yarn can be installed using the `add` command.

**Example:**

```shell
# Install the latest version
yarn add create-react-app

# Install version 1.5.2
yarn add create-react-app@1.5.2

# Install version 1.5.2 globally
yarn global add create-react-app@1.5.2
```

#### Create a React app with Yarn

A new React web app can be created by typing the following command:

```shell
yarn create react-app my-app
```

**Note:**

*Create* is just a shorthand that helps you do two things at once:

- Install `create-<starter-kit-package>` globally, or update the package to the latest version if it already exists. No need to manually add the package using **global add** (at least if we are fine using the latest version)
- Run the executable located in the `bin` field of the starter kit’s `package.json`, forwarding any `<args>` to it

In other words, `yarn create react-app my-app` is equivalent to:

```shell
yarn global add create-react-app
create-react-app my-app
```



### React

#### Writing code in JSX

JSX is a syntax extension to JavaScript that adds XML syntax to JavaScript and it is recommended using it when working with React (although it is not strictly required).

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display. Instead of artificially separating *technologies* by putting markup and logic in separate files, React concerns with loosely coupled units called “components” that contain both.

The JSX file needs to be converted to plain JavaScript before it can be used web browsers. This process is called **transpilation** and a commonly used compiler is called Babel. Babel is also configured as default compiler when setting up a React-App with `create-react-app`. 

**Transpile example:**

```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```
After transpilation of the JSX file we end up with the following JavaScript file. As we can see, the `<div>` element was replaced by the `React.createElement` statement.

```jsx
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```

#### React elements

Elements form the smallest building blocks of React apps. We can also say that an element describes what someone wants to see on the screen.

```jsx
# Defines a element/object using the JSX Syntax
const element = <h1>Hello, world</h1>;
```

However, unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

#### React components

A component can be considered as a group of React elements that should be rendered together on the screen. They provide an easy way to split the UI into independent, reusable pieces.

When defining React components we should stick to the following convention:

- User-defined component names must always start with a capital letter (these compile to React.createElement)
- Tags starting with lowercase letters are treated as DOM tags (built-in components)

#### Component lifecycle

A React application is made up of multiple React components that  are connected together to form the entire screen of your React applications view.  Whenever a component is created, it is also added to the DOM of the application and the React Component Hierarchy. So, a component passes through what we call as the life cycle of a component.

**Lifecycle**:

- Mounting
- Updating
- Unmounting

In each stage of the component lifecycle a set of functions is invoked (in the order specified below)

**Mounting:**

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

**Updating:**

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

#### Component Types

Sometimes components are informally classified as **presentational** or **container** components.

**Presentational components** are ones that are mainly concerned with rendering the "view" based on data that is passed to them via props. Typically such components do not maintain their own local state. **Container components** are used to "make things work". They fetch data, maintain their own state and make use of presentational components for rendering by providing their status to them.

#### Adding Bootstrap to a React app

Bootstrap can be easily installed using yarn just by adding the `bootstrap` package. However, the JavaScript part of Bootstrap cannot be directly used together with React. A Bootstrap-based packaged called `Reactstrap` provides a solution to this problem. Reactstrap supplies Bootstrap components re-implemented using React components (similar to JavaScript components re-implemented using React components in Reactstrap).

**Installing the required packages**

```shell
yarn add bootstrap@4.0.0
yarn add reactstrap@5.0.0
yarn add react-popper@0.9.2
```

**Example: Add Bootstrap components to our JavaScript**

Add the Bootstrap CSS to index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
```

Reconfigure app.js to use Bootstrap components

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
```

