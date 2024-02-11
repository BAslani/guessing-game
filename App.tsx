import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import GameScreen from "./screens/GameScreen"
import { useState } from "react"
import colors from "./constants/colors"
import GameOverScreen from "./screens/GameOverScreen"
import { useFonts } from "expo-font"

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null)
  const [gameOver, setGameOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  const numberPickHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  const gameOverHandler = () => {
    setGameOver(true)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={numberPickHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    )
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
