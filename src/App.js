import React, { Component } from 'react';
import ImageDisplay from './ImageDisplay';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
    };
  }

  componentDidMount() {
    this.fetchRandomImage();
  }

  fetchRandomImage = () => {

    //  using the Unsplash API to fetch rand images:
    fetch('https://source.unsplash.com/random')
      .then((response) => {
        this.setState({ imageUrl: response.url });
      })
      .catch((error) => {
        console.error('Error fetching random image:', error);
      });
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <div className="app">
        <ImageDisplay imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
