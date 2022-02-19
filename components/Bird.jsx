import { Image } from 'react-native';
import { useState } from "react";

export default function Bird({ birdBottom, birdLeft }) {
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('FLYING');   // CRASHED, FINISHED
  const birdWidth = 50;
  const birdHeight = 60;
  return (
    <Image
      source={require('../assets/birdStraight.png')}
      style={{
        position: 'absolute',
        width: birdWidth,
        height: birdHeight,
        left: birdLeft - (birdWidth / 2),
        bottom: birdBottom - (birdHeight / 2),
        resizeMode: 'stretch'
      }} />
  );
}