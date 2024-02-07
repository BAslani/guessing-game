import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import GameScreen from "./screens/GameScreen"

const App = () => {
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
        <SafeAreaView style={styles.rootBackground}>
          {/* <StartGameScreen /> */}
          <GameScreen />
        </SafeAreaView>
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
