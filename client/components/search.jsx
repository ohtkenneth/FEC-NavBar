import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  render() {
    return (
      <form>
        <div />
        <input type="text" placeholder="Search" id="search" />
      </form>
    );
  }
}

export default Search;
