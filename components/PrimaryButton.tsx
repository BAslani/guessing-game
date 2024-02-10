import { View, Text, StyleSheet, Pressable } from "react-native"
import React, { ReactNode, type FC } from "react"
import colors from "../constants/colors"

type PrimaryButtonProps = {
  children: ReactNode
  onPress: () => void
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonContainerOuter}>
      <Pressable
        style={styles.buttonContainerInner}
        android_ripple={{ color: colors.priary600 }}
        onPress={onPress}
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
    backgroundColor: colors.priary500,
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
