import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { FC } from "react"

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
})

export default Title
