import React from 'react';
import style from "../styles/style.css";
import axios from 'axios';

class Images extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURLs: [],
      shoeId: 1,
      colorId: 1
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    axios.get(`/imageURLs/${this.state.shoeId}/${this.state.colorId}`)
      .then(results => {
        this.setState({imageURLs: results.data});
      })
      .catch(error => console.log('Error: ', error));
  }

  render() {
    return (
      <div className={style.container}>
        {this.state.imageURLs.map(imageURL => 
          <img src= {imageURL} height='200' width='200' />       
        
        )}
        {/* <img src='https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/94.jpeg' height='200' width='200' />
        <img src='https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/94.jpeg' height='200' width='200' />
        <img src='https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/94.jpeg' height='200' width='200' />
        <img src='https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/94.jpeg' height='200' width='200' />
        <img src='https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/94.jpeg' height='200' width='200' />
        <img src='https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/94.jpeg' height='200' width='200' />
        <img src='https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/94.jpeg' height='200' width='200' />
        <img src='https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/94.jpeg' height='200' width='200' /> */}
      </div>

    );
  }
}


export default Images;
