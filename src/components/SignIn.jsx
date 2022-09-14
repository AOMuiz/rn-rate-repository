import React from "react";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import SignInForm from "./SignInForm";
import { Formik } from "formik";
import { useSignIn } from "../hooks/useSignIn";

const initialValues = {
  Username: "",
  Password: "",
};

const validationSchema = yup.object().shape({
  Username: yup.string().required("Username is required"),
  Password: yup
    .string()
    .min(8, "Password must be greater or equal to 8")
    .required("Password is required"),
});

const SignIn = () => {
  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    // const { Username, Password } = values;
    const username = values.Username;
    const password = values.Password;

    console.log(username, password);

    try {
      signIn({ username, password });
      console.log({ result });
    } catch (e) {
      console.log(e);
    }
    console.log(username, password);
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

// const SignIn = () => {
//   const [signIn] = useSignIn();
//   let history = useHistory();

//   const onSubmit = async (values) => {
//     const { username, password } = values;

//     await signIn({ username, password });

//     history.push("/");
//   };

//   return <SignInContainer onSubmit={onSubmit} />;
// };

export default SignIn;

const styles = StyleSheet.create({});
