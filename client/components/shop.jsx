import React from 'react';
import CategoryEntry from './ShopDropDowns/categoryentry.jsx';
import SpecificCatEntry from './ShopDropDowns/specificCatEntry.jsx';

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
    this.hideBox = this.hideBox.bind(this);
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
      display: true
    });
  }
  hideBox() {
    this.setState({
      display: false
    });
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={e => {
            this.showDropDown();
          }}
          onPointerLeave={e => {
            console.log('mouse left');
            this.showDropDown();
            this.hideBox();
          }}
          // onPointerLeave={this.hideBox}
        >
          <div
            style={{
              height: '38px',
              padding: '22px 28px 0px 28px',
              boxShadow: '0 1px 8px rgba(0,0,0,.15)',
              zIndex: 3000
            }}
            className="shop"
          >
            SHOP
          </div>

          <div
            style={{
              display: 'flex',
              position: 'absolute',
              flexDirection: 'row',
              backgroundColor: 'white',
              zIndex: 3000
            }}
            // className="shopDrops"
          >
            <span
              style={{
                boxShadow: '0 1px 8px rgba(0,0,0,.15)',
                paddingTop: '22px'
                // zIndex: 1130
              }}
            >
              {this.state.toggleDrop ? (
                this.state.entries.map((entry, index) => {
                  return (
                    <CategoryEntry
                      key={index}
                      name={entry}
                      displayBox={this.displayBox}
                    />
                  );
                })
              ) : (
                <div />
              )}
            </span>
            <span
              style={{
                boxShadow: '0 1px 8px rgba(0,0,0,.15)',
                paddingTop: '22px'
                // zIndex: 1130
              }}
            >
              {this.state.display && this.state.toggleDrop ? (
                <SpecificCatEntry />
              ) : (
                <div />
              )}
            </span>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Shop;
