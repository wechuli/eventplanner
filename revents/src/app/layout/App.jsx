import React, { Component } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
