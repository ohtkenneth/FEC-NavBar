import React from 'react';
import CssModules from 'react-css-modules';
// import NavDropDown from './navDropDown';
// import styles from './styles.css';
import styled from 'styled-components';
const TabDiv = styled.div`
  float: left;
  display: flex;
  justify-content: space-between;
  /* margin-top: 20px; */
  vertical-align: 0em;
  position: relative;
  text-transform: uppercase;
  height: 40px;
  cursor: default;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 22px;
  letter-spacing: 0.0625em;
  text-align: justify;
  &:hover {
    /* border-style: solid;
        border-width: 1px 1px 0px 1px; */
    /* padding-top: 1em; */
    box-shadow: grey 0px 1px 8px;
    /* vertical-align: 1em; */
    /* align-content: 1em; */
    /* box-align: end; */
    /* margin-bottom: 0px; */
    /* box-direction: reverse; */
  }
`;
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false
    };
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav() {
    this.setState({
      toggleNav: !this.state.toggleNav
    });
  }
  render() {
    // console.log('inside tab:', this.props.name);

    return (
      <TabDiv
        style={{
          boxShadow:
            this.props.name === this.props.selected ? 'grey 0px 1px 8px' : ''
        }}
        // className="tabs"
        onPointerEnter={() => {
          this.props.showDropDown(this.props.name, true);
          // this.handleNav();
        }}
        onPointerLeave={this.props.hideDropDown}
        // onPointerLeave={this.handleNav}
      >
        <div>{this.props.name}</div>
        {/* {this.state.toggleNav ? <NavDropDown /> : <div />} */}
      </TabDiv>
    );
  }
}
export default Tab;
