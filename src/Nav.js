import React from 'react';
import './App.css';

class Nav extends React.Component {
  render () {
    return (
      <div className="Nav">
        <button>Home</button>
        <button>Explore</button>
        <button>Channels</button>
        <button>Sign up</button>
        <button>Log in</button>

      </div>
    );

  }
}

export default Nav;
