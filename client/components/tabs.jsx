import React from 'react';
import Tab from './tab.jsx';
// import NavDropDown from './navDropDown';
class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNames: [
        'NEW',
        'BRANDS',
        'GIFTS',
        'COMMUNITY',
        'HOW-TOS',
        'STORES & SERVICES'
      ],
      toggleDropDown: false,
      dropDownName: ''
    };
    this.showDropDown = this.showDropDown.bind(this);
  }
  showDropDown() {
    this.setState({
      toggleDropDown: !this.state.toggleDropDown
    });
  }
  render() {
    return (
      <div
      // style={{ display: 'grid', gridColumn: 1 }}
      // onPointerEnter={this.showDropDown}
      // onPointerLeave={this.showDropDown}
      // onPointerEnter={e => this.props.showDrop(e)}
      // onPointerLeave={this.props.hideDrop}
      >
        <div>
          {this.state.tabNames.map((name, index) => {
            return (
              <Tab
                key={index}
                name={name}
                showDropDown={this.props.showDrop}
                hideDropDown={this.props.hideDrop}
              />
            );
          })}
        </div>
        {/* <div>{this.state.toggleDropDown ? <NavDropDown /> : <div />}</div> */}
      </div>
    );
  }
}
export default Tabs;
