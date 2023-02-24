import React from "react";
import { StyleSheet, View, Image, Platform} from "react-native";
import StylesText from "./StylesText";
import { theme } from "../theme";
const ReposItemHeader = ({ repo }) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StylesText fontWeight="bold">{repo.fullname}</StylesText>
        <StylesText color="secondary"> {repo.description}</StylesText>
        <StylesText style={styles.lenguage}>{repo.lenguage}</StylesText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "orange",
      default: "blue"
    }),
    alignSelf: "flex-start",
    overflow: "hidden",
    borderRadius: 4,
    marginVertical: 4
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default ReposItemHeader;
