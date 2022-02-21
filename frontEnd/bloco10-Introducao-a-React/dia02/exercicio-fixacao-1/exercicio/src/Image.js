import React from 'react';
import Gato from './Gato.webp'

class Image extends React.Component {
  render() {
    return <img src={Gato} alt={'Cute cat staring'} />;
  }
}

export default Image;