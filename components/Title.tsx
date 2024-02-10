import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { FC } from "react"
import colors from "../constants/colors"

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12,
  },
})

export default Title
