import React from 'react';
import './App.css';

class StreamDetail extends React.Component {

  render () {
    // console.log("what", this.props)
    return (
      <div className="StreamDetailCard">
        <p className="StreamTitle"> Stream Title </p>
        <p className="User"> User </p>

      </div>
    );

  }
}

export default StreamDetail;
