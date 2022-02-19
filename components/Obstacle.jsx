import { Image } from "react-native";
import { useState } from "react";

export default function Obstacle({ obstacleLeft, obstacleWidth, obstacleHeightLower, obstacleHeightUpper, obstacleGap }) {
  const [image, setImage] = useState('');

  return (
    <>
      <Image
        source={require('../assets/pipeSouth.png')}

        style={{
          position: 'absolute',
          backgroundColor: 'green',
          width: obstacleWidth,
          height: obstacleHeightLower,
          left: obstacleLeft,
          bottom: 0,
          resizeMode: 'stretch'
        }} />
      <Image
        source={require('../assets/pipeNorth.png')}


        style={{
          position: 'absolute',
          backgroundColor: 'green',
          width: obstacleWidth,
          height: obstacleHeightUpper,
          left: obstacleLeft,
          bottom: obstacleHeightLower + obstacleGap,
          resizeMode: 'stretch'
        }} />
    </>
  );
}