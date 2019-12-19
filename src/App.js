import React from 'react';
import './App.css';
import Nav from './Nav.js';
import StreamCard from './StreamCard';
import CardContainer from './CardContainer'

class App extends React.Component {
  state = {
    cards: [1,2,3],
  }

  GiveThem = () => {
    this.state.cards.map( el => { return <StreamCard el={el} /> })
  }

  render () {
    return (
      <>
      <Nav />
      <div className="App">
        <CardContainer cards={this.state.cards}/>
      </div>

      </>
    );

  }
}

export default App;
