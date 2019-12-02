import React from "react";
import { View, Text, StyleSheet } from "react-360";

const HouseInfoPanel = ({ info }) => {
  const { infoPanel, infoHeader, infoText } = styles;

  return (
    <View style={infoPanel}>
      <Text style={infoHeader}>Room Info</Text>
      <Text style={infoText}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoPanel: {
    height: 400,
    width: 400,
    backgroundColor: "rgb(255, 200, 50)",
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 5,
    borderRadius: 20,
    opacity: 0.8
  },
  infoHeader: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default HouseInfoPanel;
