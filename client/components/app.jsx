import React from 'react';
import Search from './search.jsx';
import Banner from './banner.jsx';
import Shop from './shop.jsx';
import Tabs from './tabs.jsx';
import Signup from './signup.jsx';
import NavDropDown from './navDropDown.jsx';
// import bannerimg from '../Images/banner.png';
var App = () => {
  return (
    <div>
      <div>
        <img src="https://www.sephora.com/contentimages/homepage/090418/Homepage/DesktopMweb/2018-09-04-hp-persistent-banner-labor-day-us-slice.jpg" />
      </div>
      <h1 className="title">Sephora</h1>
      <Search />
      <Signup />
      <div className="bottomBar">
        <Shop />
        <Tabs />
      </div>
      {/* <div>
        <NavDropDown />
      </div> */}
    </div>
  );
};
export default App;
