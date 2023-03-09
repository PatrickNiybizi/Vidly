import "./App.css";
import React from "react";
import Movies from "./Component/Movies";

class App extends React.Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
