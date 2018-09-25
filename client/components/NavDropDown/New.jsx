import React from 'react';

const New = props => {
  return (
    <div className="NavDrops">
      <div className="navs-text">
        <h4>
          <a href="/product">Just Arrived</a>
        </h4>
        <div>
          <a href="/product">Makeup</a>
        </div>
        <div>
          <a href="/product">Skincare</a>
        </div>
        <div>
          <a href="/product">Fragrance</a>
        </div>
        <div>
          <a href="/product">Hair</a>
        </div>
        <div>
          <a href="/product">Bath {'&'} Body</a>
        </div>
        <div>
          <a href="/product">Tools {'&'} Brushes</a>
        </div>
        <div>
          <a href="/product">Men</a>
        </div>
        <div>
          <a href="/product">View All</a>
        </div>
      </div>
      <img src="https://imgur.com/JlXerio" />
      <img src="https://imgur.com/DuIFHwM" />
      <div className="column">
        <img src="https://imgur.com/Twj3sNy" />
        <img src="https://imgur.com/B7OA7Fs" />
      </div>
    </div>
  );
};
export default New;
