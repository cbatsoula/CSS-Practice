import React from 'react';
import './App.css';

class Nav extends React.Component {

  handleClick = (e) => {

    console.log("ok")
  }

  render () {
    return (
      <div className="Nav">
        <button className="button">Home</button>
        <button className="button" onClick={this.handleClick}>Explore</button>
        <button className="button" >Channels</button>
        <button className="button">Sign up</button>
        <button className="button">Log in</button>

      </div>
    );

  }
}

export default Nav;
