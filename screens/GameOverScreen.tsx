import { View, Text, StyleSheet, Image } from "react-native"
import React, { FC } from "react"
import Title from "../components/Title"
import colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

type GameOverProps = {
  roundsNumber: number
  userNumber: number
  onStartNewGame: () => void
}

const GameOverScreen: FC<GameOverProps> = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title title='GAME OVER' />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.textStyle}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.priary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textStyle: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.priary500,
  },
})

export default GameOverScreen
