import React, { PureComponent } from "react";
import { VrButton, Text, StyleSheet } from "react-360";

import { changeRoom } from "../../data/store";

class Button extends PureComponent {
  state = { hover: false };

  handleChangeHover = val => () => this.setState({ hover: val });

  handleClickButton = roomSelected => () => changeRoom(roomSelected);

  render() {
    const { hover } = this.state;
    const { room } = this.props;
    const { button, buttonHover, buttonText } = styles;

    const roomName = room.split("_").join(" ");

    return (
      <VrButton
        style={hover ? buttonHover : button}
        onEnter={this.handleChangeHover(true)}
        onExit={this.handleChangeHover(false)}
        onClick={this.handleClickButton(room)}
      >
        <Text style={buttonText}>{roomName}</Text>
      </VrButton>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: "rgb(0, 0, 0)",
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 5
  },
  buttonHover: {
    width: 200,
    backgroundColor: "rgb(0, 45, 72)",
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 5
  },
  buttonText: { textAlign: "center" }
});

export default Button;
