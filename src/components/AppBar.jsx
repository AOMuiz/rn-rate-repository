import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import Text from "./Text";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.navBar}
      >
        <Link to="/">
          <Text style={styles.links} fontSize="subHeading">
            Repositories
          </Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.links}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 30,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  links: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    paddingHorizontal: 10,
  },
});

export default AppBar;
