import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useCallback, useEffect, useMemo, useState } from "react";
import Bird from './components/Bird';
import Obstacle from './components/Obstacle';
import Score from './components/Score';

export default function App() {
  // screen stuff
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  // bird stuff
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const verticalStep = 3;
  let birdIntervalId;
  // obstacle stuff
  const obstacleWidth = 10;
  // const obstacleHeightLower = useMemo(() => { return (screenHeight / 4 + (Math.random() * (screenHeight / 4))) }, []);
  const [obstacleHeightLower, setObstacleHeightLower] = useState(screenHeight / 4 + (Math.random() * (screenHeight / 4)));
  const obstacleGap = screenHeight / 4;
  // const obstacleHeightUpper = screenHeight - obstacleHeightLower - obstacleGap;
  const [obstacleHeightUpper, setObstacleHeightUpper] = useState(screenHeight - obstacleHeightLower - obstacleGap);
  const [obstacleLeft, setObstacleLeft] = useState(screenWidth);
  const horizontalStep = 5;
  let obstacleIntervalId;
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  //start bird falling
  useEffect(() => {
    if (birdBottom > verticalStep) {
      birdIntervalId = setInterval(() => {
        setBirdBottom(birdBottom - verticalStep)
      }, 30);
      return () => { clearInterval(birdIntervalId) }
    }
  }, [birdBottom]);

  //start obstacle moving to the left
  useEffect(() => {
    if (obstacleLeft > 0 - obstacleWidth) {
      obstacleIntervalId = setInterval(() => {
        setObstacleLeft(obstacleLeft - horizontalStep)
      }, 30);
      return () => { clearInterval(obstacleIntervalId) }
    }
    else {
      let oHL = screenHeight / 4 + (Math.random() * (screenHeight / 4));
      let oHU = screenHeight - oHL - obstacleGap;
      setScore(score + 1);
      setObstacleLeft(screenWidth);
      setObstacleHeightLower(oHL);
      setObstacleHeightUpper(oHU);
      //console.log(`height: ${screenHeight}, oHL: ${oHL}, gap: ${obstacleGap}, oHU: ${oHU}`);
    }
  }, [obstacleLeft]);

  //check for collisions

  useEffect(() => {
    console.log(`birdBottom: ${birdBottom}, oHL: ${obstacleHeightLower}, birdLeft: ${birdLeft + 25}, obstacleLeft: ${obstacleLeft}`);
    if (((birdBottom <= obstacleHeightLower) ||
      (birdBottom + 30 >= obstacleHeightLower + obstacleGap)) &&
      (birdLeft + 25 >= obstacleLeft) &&
      (birdLeft + 25 <= obstacleLeft + 10)) {
      //game over
      gameOver();
    }
  }, [birdBottom, obstacleLeft]);

  const gameOver = () => {
    clearInterval(birdIntervalId);
    clearInterval(obstacleIntervalId);
    setIsGameOver(true);
    console.log('game over');
  };

  const jump = () => {
    if (!isGameOver) {
      if (birdBottom < screenHeight - 50) {
        setBirdBottom(birdBottom + 50);
      }
    }
  }

  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
        <Obstacle obstacleLeft={obstacleLeft} obstacleWidth={obstacleWidth} obstacleHeightLower={obstacleHeightLower} obstacleHeightUpper={obstacleHeightUpper} obstacleGap={obstacleGap} />
        {isGameOver && <Score score={score} scoreLeft={screenWidth / 2 - 100} scoreHeight={screenHeight / 2 - 37} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
