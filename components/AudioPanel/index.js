import React from "react";
import {
  asset,
  NativeModules,
  View,
  VrButton,
  Image,
  StyleSheet
} from "react-360";

const { AudioModule } = NativeModules;

const AudioPanel = () => {
  const playAmbientMusic = () =>
    AudioModule.playEnvironmental({
      source: asset("audio/ambient.wav"),
      volume: 0.3
    });

  const stopAmbientMusic = () => AudioModule.stopEnvironmental();

  return (
    <View style={styles.audioPanel}>
      <VrButton onClick={playAmbientMusic}>
        <Image style={styles.audioIcon} source={asset("audioOn.png")} />
      </VrButton>
      <VrButton onClick={stopAmbientMusic}>
        <Image style={styles.audioIcon} source={asset("audioOff.png")} />
      </VrButton>
    </View>
  );
};

const styles = StyleSheet.create({
  audioPanel: {
    flexDirection: "row"
  },
  audioIcon: {
    height: 50,
    width: 50
  }
});

export default AudioPanel;
