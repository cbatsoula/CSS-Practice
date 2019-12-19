import React from 'react';
import './App.css';
import StreamCard from './StreamCard';

class CardContainer extends React.Component {

  GiveThem = () => {
    // this.props.cards.map(el => {return <StreamCard key={el} /> })
    this.props.cards.map((item,i) => {return <StreamCard key={item} /> } )
  }

  //this.GiveThem() did not show my cards, need to find out why/did something change?
  render () {
    console.log("cardcontainer", this.props.cards)
    return (
      <div className="CardContainer">
      <h3> cardContainer </h3>
      {
        this.props.cards.map((item,i) => {return <StreamCard key={item} /> } )
      }
      </div>

    );
  }
}

export default CardContainer;
