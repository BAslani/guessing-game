import { View, Text, StyleSheet, TextInput, Alert } from "react-native"
import React, { useState, type FC } from "react"
import PrimaryButton from "../components/PrimaryButton"
import colors from "../constants/colors"
import Title from "../components/Title"

const StartGameScreen: FC<{ onPickNumber: (number: number) => void }> = ({
  onPickNumber,
}) => {
  const [enteredNumber, setEnteredNumber] = useState("")

  const inputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid input",
        "The input should be a number between 1 and 99.",
        [
          {
            text: "ok",
            style: "destructive",
            onPress: () => setEnteredNumber(""),
          },
        ]
      )
    } else {
      onPickNumber(chosenNumber)
    }

    return
  }

  return (
    <View style={styles.rootContainer}>
      <Title title='Guess My Number' />
      <View style={styles.container}>
        <Text style={styles.instruction}>Enter a number</Text>
        <TextInput
          maxLength={2}
          value={enteredNumber}
          onChangeText={setEnteredNumber}
          style={styles.input}
          keyboardType='number-pad'
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => setEnteredNumber("")}>
            Reset
          </PrimaryButton>
          <PrimaryButton onPress={inputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
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
    fontFamily: "open-sans",
    color: colors.accent500,
    fontSize: 24,
  },
  input: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
})

export default StartGameScreen
