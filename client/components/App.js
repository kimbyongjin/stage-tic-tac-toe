import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      board: {}
    };
  }

  render() {
    return (
      <div className="main">Main Element</div>
    );
  }
}

export default App;
