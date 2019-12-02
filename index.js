import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset
} from "react-360";

import house from "./data/houseData";

export default class HouseTourVR extends Component {
  state = {
    room: house.House.roomName,
    info: house.House.info,
    adjacentRooms: house.House.adjacentRooms
  };

  createRoomBtn = rooms =>
    rooms.map(room => (
      <VrButton key={`${room}-button`} onClick={this.handleClickButton(room)}>
        <Text style={{ backgroundColor: "green" }}>{room}</Text>
      </VrButton>
    ));

  handleClickButton = roomSelected => () => {
    this.setState({
      room: house[`${roomSelected}`].roomName,
      info: house[`${roomSelected}`].info,
      adjacentRooms: house[`${roomSelected}`].adjacentRooms
    });

    Environment.setBackgroundImage(
      asset(`./360_${house[`${roomSelected}`].img}`)
    );
  };

  render() {
    const { room, info, adjacentRooms } = this.state;

    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Selection</Text>
          <Text>{room}</Text>
          {this.createRoomBtn(adjacentRooms)}
        </View>

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

AppRegistry.registerComponent("HouseTourVR", () => HouseTourVR);
