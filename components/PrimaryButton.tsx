import { View, Text, StyleSheet, Pressable } from "react-native"
import React, { ReactNode, type FC } from "react"

type PrimaryButtonProps = {
  children: ReactNode
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <View style={styles.buttonContainerOuter}>
      <Pressable
        style={styles.buttonContainerInner}
        android_ripple={{ color: "640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainerOuter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    flex: 1,
  },
  buttonContainerInner: {
    backgroundColor: "#72063c",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
})

export default PrimaryButton
