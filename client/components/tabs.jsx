import React from 'react';
import Tab from './tab.jsx';
import NavDropDown from './navDropDown';
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
    // this.showDropDown = this.showDropDown.bind(this);
  }
  render() {
    return (
      <div>
        <div>
          {this.state.tabNames.map((name, index) => {
            return (
              <Tab key={index} name={name} showDropDown={this.props.showDrop} />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Tabs;
