import React from 'react';
import './App.css';

class StreamCard extends React.Component {

  render () {
    console.log("what", this.props.el)
    return (
      <div className="StreamCard">
        <h3> Streamin </h3>
        <h3> {this.props.key} </h3>
      </div>
    );

  }
}

export default StreamCard;
