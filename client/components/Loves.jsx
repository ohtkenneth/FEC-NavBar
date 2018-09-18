import React from 'react';
import Image from 'react-svg-loader!../Images/heart.svg';

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
        <Image width={30} height={30} />
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
