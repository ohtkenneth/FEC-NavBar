import React from 'react';

const HowTos = props => {
  let quizzes = [
    'Foundation Finder',
    'Skincare Finder',
    'Mascara Finder',
    'Hair Care Finder',
    'Fragrance Finder'
  ];
  let guides = ['K-Beauty', 'Clean Beauty', 'Skin Hydration', 'View All'];
  return (
    <div className="NavDrops">
      <div className="navs-text">
        <h4>Quizzes</h4>
        <div>
          {quizzes.map((quiz, i) => (
            <div key={i}>
              <a href="/product">{quiz}</a>
            </div>
          ))}
        </div>
        <h4>Buying Guides</h4>
        {guides.map((guide, i) => (
          <div key={i}>
            <a href="/product">{guide}</a>
          </div>
        ))}
      </div>
      <img src="https://imgur.com/DuIFHwM.jpg" />
      <img src="https://imgur.com/UNXs0lP.jpg" />
      <div className="column">
        <img src="https://imgur.com/V3S5pMR.jpg" />
        <img src="https://imgur.com/gTDWOmw.jpg" />
      </div>
    </div>
  );
};
export default HowTos;
