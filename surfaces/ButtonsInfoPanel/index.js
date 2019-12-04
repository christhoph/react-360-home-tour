import React from "react";
import { View, Text, StyleSheet } from "react-360";

import Button from "../../components/Button";
import AudioPanel from "../../components/AudioPanel";

const ButtonsInfoPanel = ({ adjacentRooms }) => {
  const { buttonPanel, buttonHeader } = styles;

  const createRoomBtn = rooms =>
    rooms.map(room => <Button key={`${room}-button`} room={room} />);

  return (
    <View>
      <View style={buttonPanel}>
        <Text style={buttonHeader}>Room Selection</Text>
        {createRoomBtn(adjacentRooms)}
        <AudioPanel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPanel: {
    height: 400,
    width: 400,
    backgroundColor: "rgb(255, 200, 50)",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 5,
    borderRadius: 20,
    opacity: 0.8
  },
  buttonHeader: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default ButtonsInfoPanel;
