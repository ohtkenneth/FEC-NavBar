import React from 'react';
import CategoryEntry from './categoryentry.jsx';
import SpecificCatEntry from './specificCatEntry.jsx';

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
      toggleDrop: false,
      display: false
    };
    this.displayBox = this.displayBox.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
  }
  showDropDown() {
    // console.log('toggle');
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
  }
  displayBox(e) {
    console.log('this should activate', e);
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    return (
      <span
        onMouseEnter={e => {
          this.showDropDown();
        }}
        onMouseLeave={this.showDropDown}
      >
        <div className="shop">SHOP</div>
        <br />
        <div className="shopDrops">
          <span>
            {this.state.display && this.state.toggleDrop ? (
              <SpecificCatEntry />
            ) : (
              <div />
            )}
          </span>
          <span>
            {this.state.toggleDrop ? (
              this.state.entries.map((entry, index) => {
                return (
                  <CategoryEntry
                    key={index}
                    name={entry}
                    toggle={this.showDropDown}
                    displayBox={this.displayBox}
                  />
                );
              })
            ) : (
              <div />
            )}
          </span>
        </div>
        {/* </div> */}
      </span>
    );
  }
}

export default Shop;
