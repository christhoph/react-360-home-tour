import { AppRegistry } from "react-360";

import { connect } from "./data/store";
import ButtonsInfoPanel from "./surfaces/ButtonsInfoPanel";
import HouseInfoPanel from "./surfaces/HouseInfoPanel";

const ConnectedButtonsInfoPanel = connect(ButtonsInfoPanel);
const ConnectedHouseInfoPanel = connect(HouseInfoPanel);

AppRegistry.registerComponent(
  "ConnectedButtonsInfoPanel",
  () => ConnectedButtonsInfoPanel
);
AppRegistry.registerComponent(
  "ConnectedHouseInfoPanel",
  () => ConnectedHouseInfoPanel
);
