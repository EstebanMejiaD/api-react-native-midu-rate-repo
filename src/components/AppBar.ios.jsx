import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import StylesText from "./StylesText.jsx";
import Constants from "expo-constants";
import { theme } from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();

  const active = pathname == to
  
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StylesText fontWeight="bold" style={textStyles}>
        {children}
      </StylesText>
    </Link>
  );
};

const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">
          Repos
        </AppBarTab>
        <AppBarTab to="/signin">
          Sign in
        </AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
    flexDirection: "row",
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingBottom: 15,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

export default AppBar;
