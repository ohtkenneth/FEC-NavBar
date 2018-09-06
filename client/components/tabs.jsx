import React from 'react';
import Tab from './tab.jsx';
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
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.tabNames.map((name, index) => {
          return <Tab key={index} name={name} />;
        })}
      </div>
    );
  }
}
export default Tabs;
