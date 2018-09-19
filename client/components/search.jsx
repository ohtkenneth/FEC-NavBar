import React from 'react';
import axios from 'axios';

// import Image from 'react-svg-loader!../Images/Basket.svg';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      previous: props.searches.filter((search, i) => i < 5),
      toggleDrop: false
    };
    this.showSearches = this.showSearches.bind(this);
    console.log('this is the searches', props.searches);
  }
  componentDidMount() {
    axios
      .get('https:localhost:1337/product', { params: {} })
      .then(({ data }) => {
        console.log('here is the response', data);
        this.setState({
          previous: data
            .map(search => {
              return search.search;
            })
            .filter((search, i) => i < 5)
        });
        console.log('inside app', this.state.previous);
      })
      .catch(err => {
        console.error('Something went wrong', err);
      });
  }
  // postSearch(e) {
  //   axios.post('/product',)
  // }
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
            <div
              style={{
                position: 'absolute',
                display: 'block',
                backgroundColor: 'white',
                padding: '8px 16px 8px 16px',
                boxShadow: '0 1px 8px rgba(0,0,0,.15)',
                lineHeight: '3',
                marginRight: '8px',
                width: '195px',
                zIndex: 999
              }}
            >
              <div>Previous Searches</div>
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
