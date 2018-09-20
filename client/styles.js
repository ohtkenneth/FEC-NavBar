import styled from 'styled-components';

module.exports = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
  p {
    font-size: 12pt;
  }
  h1 {
    flex-grow: 2;
    text-align: center;
  }
  .whole-body {
    margin: auto;
    width: 980px;
    font-family: helvetica;
  }
  .shipping-info{
    flex-grow: 2;
    font-size: 10pt;
  }
  .bottomBar {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .StyledBasketBox {
    margin-right: 1200px;
    margin-left: 30px;
    position: absolute;
  }
  .StyledBasketDropDown {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 400px;
    top: 0;
    right: 0;
    justify-content: center;
    background-color: white;
    word-wrap: normal;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
    padding: 2px 8px 2px 8px;
    z-index: 1030;
  }
  .NavDrops {
    position: absolute;
    width: 980px;
    margin: auto;
    display: flex;
    flex-direction: row;
    z-index: 9999;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  }
  .blackbar {
    display: flex;
    justify-content: center;
    background-color: black;
    padding: 4px 2px 4px 2px;
    color: white;
    font-family: Helvetica;
    font-size: 12pt;
  }
  .blackBarText {
    color: white;
    font-family: Helvetica,
    font-size: 122pt;
  }
  .navs-text {
    flex-grow: 1.2;
    padding-left: 2em;
  }
  .titleRow {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  .row{
    display: flex;
  }
  .column{
    display: flex;
    flex-direction: column;
  }
  .downArrow {
    align-self: center;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
  }
  .upArrow {
    align-self: center;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
  }
  .signup {
    display: block;
    position: relative,
    margin-right: 8px;
    width: 180px;
    padding: 8px 20px 8px 20px;
  }
  .spreadFlex {
    display: flex;
    justify-content: space-between;
  }
  .searchForm {
    display: block;
    font-family: helvetica;
    font-size: 14px;
    width: 200px;
    height: 40px;
    padding-left: 12px;
    padding-right: 12px;
    color: #000;
    background-color: #fff;
    border-width: 1px;
    border-radius: 4px;
    border-color: #ccc;
  }
  .specificCatEntry {
    display: flex;
    justify-content: space-between;
    padding: 1px 50px 1px 50px;
    background-color: white;
    width: 600px;
    z-index: 9999;
  }
  #searchDrop {
    position: absolute;
    display: block;
    background-color: white;
    padding: 8px 16px 8px 16px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
    line-height: 3;
    margin-right: 8px;
    width: 195px;
    z-index: 999;
  }
  .LovesStyle {
    position: absolute;
    z-index: 1;
    /* top: 100%; */
    /* left: 20p; */
    font-weight: 700;
    font-size: 11px;
    color: #fff;
    background-color: #000;
    /* -webkit-transform: translate(-50%, 8px);
    -ms-transform: translate(-50%, 8px);
    transform: translate(-50%, 8px); */
    /* display: none; */
    padding-top: 0.375em;
    padding-bottom: 0.375em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    /* white-space: nowrap; */
    border-radius: 4px;
    font-size: 12px;
  }
  .StyledNav {
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 99999;
  }
  .shops {
    height: 38px;
    padding: 22px 28px 0px 28px;
    z-index: 3000;
    &:hover {
      box-shadow: grey 0px 1px 8px;
    }
  }
  .ShopBoxStyled {
    height: 38px;
    z-index: 3000;
  }
  .StyledBoxDrop {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
    padding-top: 22px;
  }
  .shop-flex {
    display: flex;
    position: absolute;
    margin-left: -28px;
    margin-right: 28px;
    flex-direction: row;
    background-color: white;
    zIndex: 3000;
  }
  .CatEntStyled {
    padding-bottom: 1em;
    padding-left: 50px;
    padding-right: 50px;
    background-color: white;
    zindex: 999;
    &:hover {
      font-weight: bold;
    }
  }
  .StyledFlex {
    display: flex;
    flex: 0 0 auto;
  }
  .StyledSignup {
    display: block;
    position: relative;
    marginright: 8px;
    width: 180px;
    padding: 8px 20px 8px 20px;
  }
  .signup-dropdown {
    position: absolute;
    display: block;
    background-color: white;
    padding: 8px 20px 8px 20px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
    margin-right: 0px;
    width: 210;
    margin-bottom: 2em;
    line-height: 1.5em;
    font-size: 14;
    z-index: 999;
  }
`;
