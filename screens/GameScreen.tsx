import { View, Text, StyleSheet, Alert } from "react-native"
import React, { useEffect, useState } from "react"
import Title from "../components/Title"
import colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

let minBoundry = 1
let maxBoundry = 100

const GameScreen = ({
  userNumber,
  onGameOver,
}: {
  userNumber: number
  onGameOver: () => void
}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundry = 1
    maxBoundry = 100
  }, [])

  const nextGuess = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie :))", "Play fair...", [
        { text: "Sorry!", style: "cancel" },
      ])
      return
    }
    if (direction === "lower") {
      maxBoundry = currentGuess
    } else {
      minBoundry = currentGuess + 1
    }
    const newGuess = generateRandomBetween(minBoundry, maxBoundry, currentGuess)
    setCurrentGuess(newGuess)
  }
  return (
    <View style={styles.screen}>
      <Title title="Opponent's guess" />
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.instruction}>Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuess.bind(this, "lower")}>
            Lower
          </PrimaryButton>
          <PrimaryButton onPress={nextGuess.bind(this, "higher")}>
            Higher
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Logs</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  container: {
    marginHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    backgroundColor: colors.priary800,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "#222",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  instruction: {
    color: colors.accent500,
    fontSize: 24,
  },
  numberContainer: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
})

export default GameScreen
