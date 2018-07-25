import React from 'react';
import style from "../styles/style.css";
import axios from 'axios';

class Images extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],      
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    axios.get(`/api/imageURLs/${this.props.shoeId}/${this.props.colorId}`)
      .then(results => {
        console.log(results);
        this.setState({images: results.data});
      })
      .catch(error => console.log('Error: ', error));
  }

  render() {
    console.log('hello');
    return (
      <div className={style.container}>
        {this.state.images.map(image=> 
          <img src= {image.imageURL} height='200' width='200' />       
        
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
