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
        <div>
          <div />
          <input
            style={{
              display: 'block',
              fontFamily: 'helvetica',
              fontSize: '14px',
              width: '200px',
              height: '40px',
              paddingLeft: '12px',
              paddingRight: '12px',
              color: '#000',
              backgroundColor: '#fff',
              borderWidth: '1px',
              borderRadius: '4px',
              borderColor: '#ccc'
            }}
            type="text"
            placeholder="Search"
            id="search"
          />
          {this.state.toggleDrop ? (
            <div style={{ position: 'absolute', backgroundColor: 'white' }}>
              {this.state.previous.map(search => {
                return <div>{search}</div>;
              })}
            </div>
          ) : (
            <div />
          )}
        </div>
      </form>
    );
  }
}

export default Search;
