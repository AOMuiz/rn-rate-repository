import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        name="Username"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="Password"
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text fontSize="subHeading" fontWeight="bold">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    padding: 5,
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    marginVertical: 10,
    borderRadius: theme.roundness,
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    padding: 10,
    color: "#fff",
    marginVertical: 10,
  },
});

export default SignInForm;
