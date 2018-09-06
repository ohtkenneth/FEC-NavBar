import React from 'react';
import CategoryEntry from './categoryentry.jsx';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        'MAKEUP',
        'SKINCARE',
        'FRAGRANCE',
        'HAIR',
        'BATH & BODY',
        'TOOLS & BRUSHES',
        'MEN',
        'MINI SIZE',
        'GIFTS',
        'SEPHORA COLLECTION',
        'BEAUTY OFFERS',
        'SALE'
      ],
      toggleDrop: false
    };
    this.showDropDown = this.showDropDown.bind(this);
  }
  showDropDown() {
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
  }

  render() {
    return (
      <span>
        <div
          onMouseEnter={e => {
            this.showDropDown();
          }}
        >
          SHOP
          {this.state.toggleDrop ? (
            this.state.entries.map((entry, index) => {
              return <CategoryEntry key={index} name={entry} />;
            })
          ) : (
            <div />
          )}
        </div>
      </span>
    );
  }
}

export default Shop;
