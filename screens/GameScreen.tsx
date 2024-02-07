import { View, Text, StyleSheet } from "react-native"
import React from "react"
import Title from "../components/Title"

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title title="Opponent's guess" />
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <Text>Logs</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})

export default GameScreen
