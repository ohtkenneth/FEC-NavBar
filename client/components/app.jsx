import React from 'react';
import Search from './search.jsx';
import Banner from './banner.jsx';
import Shop from './shop.jsx';
import Tabs from './tabs.jsx';
import Signup from './signup.jsx';
import NavDropDown from './navDropDown.jsx';
import Basket from './Basket.jsx';
import Loves from './Loves.jsx';
import axios from 'axios';
// import bannerimg from '../Images/banner.png';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navDropDownToggle: false,
      navDropName: '',
      searches: [],
      brands: []
    };
    this.showDrop = this.showDrop.bind(this);
    this.hideDrop = this.hideDrop.bind(this);
  }
  componentDidMount() {
    axios
      .get('/product', { params: {} })
      .then(({ data }) => {
        console.log('here is the response', data);
        this.setState({
          searches: data.map(search => {
            return search.search;
          })
        });
        this.setState({
          brands: data.map(brands => brands.brand)
        });
        console.log('inside app', this.state.searches);
      })
      .catch(err => {
        console.error('Something went wrong', err);
      });
  }
  showDrop(e, fromTab) {
    console.log(e, fromTab);
    if (fromTab) {
      this.setState({
        navDropName: e,
        navDropDownToggle: true
      });
    } else {
      this.setState({
        navDropDownToggle: true
      });
    }
    console.log(this.state.navDropName);
  }
  hideDrop(e) {
    this.setState({
      navDropDownToggle: false
    });
  }
  render() {
    return (
      <div style={{ margin: 'auto', width: '65%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <img src="https://www.sephora.com/contentimages/homepage/090418/Homepage/DesktopMweb/2018-09-04-hp-persistent-banner-labor-day-us-slice.jpg" />
        </div>
        {/* blackbar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'black',
            padding: '4px 2px 4px 2px',
            color: 'white',
            fontFamily: 'Helvetica',
            fontSize: '14px'
          }}
        >
          <div style={{ flexGrow: 2 }}>3 Free Samples with every Purchase</div>
          <div>Reorder</div>
          <div>Track Order</div>
          <div>Find a Store</div>
          <div>Country</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Search searches={this.state.searches} />
          <h1 style={{ flexGrow: 2, textAlign: 'center' }}>SEPHORA</h1>
          <Signup />
          <Loves />
          <Basket />
        </div>
        <div
          className="bottomBar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <Shop />
          <Tabs showDrop={this.showDrop} hideDrop={this.hideDrop} />
        </div>
        <div>
          {this.state.navDropDownToggle ? (
            <NavDropDown
              name={this.state.navDropName}
              hideDropDown={this.hideDrop}
              showDrop={this.showDrop}
              brands={this.state.brands}
            />
          ) : (
            <div />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'black',
            color: 'white',
            fontFamily: 'Helvetica',
            padding: '4px 0px 4px 0px',
            zIndex: '0'
          }}
        >
          <a
            style={{
              color: 'white',
              fontFamily: 'Helvetica',
              fontSize: '14px'
            }}
          >
            SPOTS OPEN! GET THE BEST BEAUTY SUBSCRIPTION BOX FOR JUST $10/MONTH.
            SUBSCRIBE NOW >
          </a>
        </div>
      </div>
    );
  }
}
export default App;
