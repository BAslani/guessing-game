import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import GameScreen from "./screens/GameScreen"
import { useState } from "react"

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null)
  const numberPickHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={numberPickHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
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
