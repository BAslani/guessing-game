import { View, Text, StyleSheet, TextInput, Alert } from "react-native"
import React, { useState, type FC } from "react"
import PrimaryButton from "../components/PrimaryButton"

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
    <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 6,
    shadowColor: "#222",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  input: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
})

export default StartGameScreen
