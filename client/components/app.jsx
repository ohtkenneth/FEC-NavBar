import React from 'react';
import Search from './search.jsx';
import Banner from './banner.jsx';
import Shop from './shop.jsx';
import Tabs from './tabs.jsx';
import Signup from './signup.jsx';
import NavDropDown from './navDropDown.jsx';
// import bannerimg from '../Images/banner.png';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navDropDownToggle: false,
      navDropName: ''
    };
    this.showDrop = this.showDrop.bind(this);
    this.hideDrop = this.hideDrop.bind(this);
  }
  showDrop(e) {
    console.log(e);
    this.setState({
      navDropDownToggle: true
    });
  }
  hideDrop(e) {
    this.setState({
      navDropDownToggle: false
    });
  }
  render() {
    return (
      <div>
        <div>
          <img src="https://www.sephora.com/contentimages/homepage/090418/Homepage/DesktopMweb/2018-09-04-hp-persistent-banner-labor-day-us-slice.jpg" />
        </div>
        <div style={{ flex: 1, flexDirection: 'row' }}>
          <h1 className="title">Sephora</h1>
          <Search />
          <Signup />
        </div>
        <div className="bottomBar">
          <Shop />
          <Tabs showDrop={this.showDrop} hideDrop={this.hideDrop} />
        </div>

        {this.state.navDropDownToggle ? (
          <NavDropDown
            name={this.state.navDropName}
            hideDropDown={this.hideDrop}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default App;
