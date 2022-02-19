import { Text } from "react-native";
import { useState } from "react";

export default function Score({ score, scoreLeft, scoreBottom }) {

  return (
    <Text style={{
      position: 'absolute',
      backgroundColor: 'yellow',
      width: 200,
      height: 75,
      left: scoreLeft,
      bottom: scoreBottom,
    }}>
      {score}
    </Text>


  );
}