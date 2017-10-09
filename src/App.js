import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react";

@observer
class App extends Component {
  componentDidMount(){
    this.props.appState.getUserInformation();
  }
  render() {
    const {name, login, url, blog, location, avatar_url} = this.props.appState.userInformation;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Using Mobx</h1>
        </header>
        <img src={avatar_url} />
        <h1>{name}</h1>
        <h2>{login}</h2>
        <h3>{location}</h3>
        <a href={blog}>Blog</a>
      </div>
    );
  }
}

export default App;
