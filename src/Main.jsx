
// https://www.nike.com/t/air-jordan-1-retro-high-og-shoe-WR35rK/555088-401
// deliverables tracker: https://docs.google.com/spreadsheets/d/1yP2GGG4pzrZwWRA3qO9RRbWKM0QNZh-8L-SVkCPShnU/edit?usp=sharing
// https://drive.google.com/drive/folders/1NNJxzLHb3WsMkMwXl1X0gqOivyxZrHTd
// https://docs.google.com/document/d/1r8Xc7_D9xNhIaCPR2Kex3yP31m3ZKmX1rzv_rbEOFAE/edit
//https://docs.google.com/spreadsheets/d/1gJLYamq0vzEuU86TqQ5aVJa8JOwWZxvYTVutvL3MzO8/edit#gid=589453110
import React from 'react';
import style from './styles/style.css';
import Images from './components/Images.jsx';
import Thumbs from './components/Thumbs.jsx';
import Sizes from './components/Sizes.jsx';
import AddToCart from './components/AddToCart.jsx';
import NamePrice from './components/NamePrice.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={style.main}>

        <div className={style.images}>
          <Images />
        </div>

        <div>
          <div>
            <NamePrice />
            <Thumbs />
          </div>
          <div>

            <Sizes />
          </div>
          <div>

            <AddToCart />
          </div>
        </div>

      </div>
    );
  }
}

export default Main;
