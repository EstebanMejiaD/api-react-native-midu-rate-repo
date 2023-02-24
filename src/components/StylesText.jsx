import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../theme";
const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheding: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center"
  }
  
});

export default function StylesText({ align, children, color, fontSize, fontWeight, style, ...restOfProps }) {
  const textStyles = [
    styles.text,
    color == 'primary'  && styles.colorPrimary,
    color == "secondary" && styles.colorSecondary,
    fontSize == "subheading" && styles.subheding,
    fontWeight == "bold" && styles.bold,
    align == "center" && styles.textAlignCenter,
    style
  ];
  return <Text style={textStyles} {...restOfProps}>{children}</Text>;
}
