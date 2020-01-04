import React from 'react';
import './App.css';
import StreamDetail from './StreamDetail'

class StreamCard extends React.Component {

  render () {
    // console.log("what", this.props)
    return (
      <div className="StreamCard">
        <StreamDetail />
      </div>
    );

  }
}

export default StreamCard;
