import React from 'react';

import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <button className="btn btn-info">Edit</button>
        <button className="btn btn-info">Single</button>
      </div>
    );
  }
}

export default MyStuff;
