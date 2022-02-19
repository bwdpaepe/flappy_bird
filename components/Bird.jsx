import { View } from 'react-native';
import { useState } from "react";

export default function Bird({ birdBottom, birdLeft }) {
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('FLYING');   // CRASHED, FINISHED
  const birdWidth = 50;
  const birdHeight = 60;
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: birdWidth,
        height: birdHeight,
        left: birdLeft - (birdWidth / 2),
        bottom: birdBottom - (birdHeight / 2)
      }} />
  );
}