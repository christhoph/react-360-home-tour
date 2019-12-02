import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";

import { connect, changeRoom } from "./data/store";

export default class Buttons extends Component {
  handleClickButton = roomSelected => () => changeRoom(roomSelected);

  createRoomBtn = rooms =>
    rooms.map(room => (
      <VrButton key={`${room}-button`} onClick={this.handleClickButton(room)}>
        <Text style={{ backgroundColor: "green" }}>{room}</Text>
      </VrButton>
    ));

  render() {
    const { room, adjacentRooms } = this.props;

    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Selection</Text>
          <Text>{room}</Text>
          {this.createRoomBtn(adjacentRooms)}
        </View>
      </View>
    );
  }
}

export class HouseInfoPanel extends Component {
  render() {
    const { info } = this.props;

    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Info</Text>
          <Text>{info}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});

const ConnectedButtons = connect(Buttons);
const ConnectedHouseInfoPanel = connect(HouseInfoPanel);

AppRegistry.registerComponent("ConnectedButtons", () => ConnectedButtons);
AppRegistry.registerComponent(
  "ConnectedHouseInfoPanel",
  () => ConnectedHouseInfoPanel
);
