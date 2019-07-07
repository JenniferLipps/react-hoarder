import React from 'react';

import './MyStuff.scss';

class MyStuff extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const editId = '12345';
    this.props.history.push(`/edit/${editId}`);
  }

  singleEvent = (e) => {
    e.preventDefault();
    const singleId = '12345';
    this.props.history.push(`/single/${singleId}`);
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <button className="btn btn-info" onClick={this.editEvent}>Edit</button>
        <button className="btn btn-info" onClick={this.singleEvent}>Single</button>
      </div>
    );
  }
}

export default MyStuff;
