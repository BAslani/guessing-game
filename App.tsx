import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import GameScreen from "./screens/GameScreen"
import { useState } from "react"
import colors from "./constants/colors"
import GameOverScreen from "./screens/GameOverScreen"

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null)
  const [gameOver, setGameOver] = useState(true)

  const numberPickHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  const gameOverHandler = () => {
    setGameOver(true)
  }

  let screen = <StartGameScreen onPickNumber={numberPickHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient
      colors={[colors.priary700, colors.accent500]}
      style={styles.rootBackground}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode='cover'
        style={styles.rootBackground}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootBackground}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootBackground: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})

export default App
