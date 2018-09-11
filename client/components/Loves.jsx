import React from 'react';

class Loves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDrop: false
    };
    this.handleDrop = this.handleDrop.bind(this);
  }
  handleDrop() {
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
  }
  render() {
    return (
      <div onPointerEnter={this.handleDrop} onPointerLeave={this.handleDrop}>
        <img />
        <div>{'<3'}</div>
        <div>
          {this.state.toggleDrop ? (
            <div className="lovesDrop">loves list</div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
export default Loves;
