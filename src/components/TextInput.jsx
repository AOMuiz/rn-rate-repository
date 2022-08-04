import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

const styles = StyleSheet.create({
  error: {
    borderColor: theme.colors.error,
  },
});

export default TextInput;
