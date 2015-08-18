import React from "react";
import ReactDOM from "react-dom";
// import HeaderBar from "./components/headerbar"

class App extends React.Component {
  render() {
    return (<h1>Hello World</h1>)
  }
}

$(()=> {
  ReactDOM.render(
    <App />,
    $("#react")[0]
  )
});