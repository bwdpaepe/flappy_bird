import { View } from "react-native";
import { useState } from "react";

export default function Obstacle({ obstacleLeft, obstacleWidth, obstacleHeightLower, obstacleHeightUpper, obstacleGap }) {
  const [image, setImage] = useState('');

  return (
    <>
      <View style={{
        position: 'absolute',
        backgroundColor: 'green',
        width: obstacleWidth,
        height: obstacleHeightLower,
        left: obstacleLeft,
        bottom: 0,
      }} />
      <View style={{
        position: 'absolute',
        backgroundColor: 'green',
        width: obstacleWidth,
        height: obstacleHeightUpper,
        left: obstacleLeft,
        bottom: obstacleHeightLower + obstacleGap,
      }} />
    </>
  );
}