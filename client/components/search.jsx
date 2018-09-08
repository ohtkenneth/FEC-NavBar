import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      previous: ['milk', 'cookies', 'spider-man'],
      toggleDrop: false
    };
    this.showSearches = this.showSearches.bind(this);
  }
  componentDidMount() {
    //fetch 5 previous searches
    //use axios to grab them
  }
  showSearches(e) {
    this.setState({
      toggleDrop: !this.state.toggleDrop
    });
    console.log('selected');
  }
  render() {
    return (
      <form
        onPointerEnter={this.showSearches}
        onPointerLeave={this.showSearches}
      >
        <div />
        <input type="text" placeholder="Search" id="search" />
        {this.state.toggleDrop ? (
          this.state.previous.map(search => {
            return <div>{search}</div>;
          })
        ) : (
          <div />
        )}
      </form>
    );
  }
}

export default Search;
