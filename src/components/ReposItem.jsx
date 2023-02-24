import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StylesText from "./StylesText";
import ReposStats from "./ReposStats";
import { theme } from "../theme";
import ReposItemHeader from "./ReposItemHeader";



const ReposItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
        <ReposItemHeader repo={repo}/>
      <ReposStats repo={repo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "orange",
      default: "red"
    }),
    alignSelf: "flex-start",
    overflow: "hidden",
    borderRadius: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
});

export default ReposItem;
