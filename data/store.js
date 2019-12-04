import React, { Component } from "react";
import { Environment, asset } from "react-360";

import house from "./houseData";

const listeners = new Set();

const State = {
  room: house.House.roomName,
  info: house.House.info,
  adjacentRooms: house.House.adjacentRooms
};

export const updateComponents = () => {
  for (const cb of listeners.values()) {
    cb();
  }
};

export const changeRoom = roomSelected => {
  const roomName = roomSelected;

  State.room = roomName;
  State.info = house[`${roomName}`].info;
  State.adjacentRooms = house[`${roomName}`].adjacentRooms;

  Environment.setBackgroundImage(asset(`./360_${house[`${roomName}`].img}`));

  updateComponents();
};

export const connect = ChildComponent => {
  return class Wrapper extends Component {
    state = {
      room: State.room,
      info: State.info,
      adjacentRooms: State.adjacentRooms
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    _listener = () =>
      this.setState({
        room: State.room,
        info: State.info,
        adjacentRooms: State.adjacentRooms
      });

    render() {
      const { room, info, adjacentRooms } = this.state;

      return (
        <ChildComponent
          {...this.props}
          room={room}
          info={info}
          adjacentRooms={adjacentRooms}
        />
      );
    }
  };
};
