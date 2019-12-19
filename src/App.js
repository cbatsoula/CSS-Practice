import React from 'react';
import './App.css';
import Nav from './Nav.js';
import StreamCard from './StreamCard';

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
      <StreamCard />
      {
        this.GiveThem()
      }
      </div>

      </>
    );

  }
}

export default App;
