import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";
import Video from "react-native-video";

class VideoView extends React.Component {
  onBuffer() {}

  onError() {}
  render() {
    return (
      <>
        <Video
          source={{
            uri:
              "http://chaokuai.ren-kuyun.com/20210224/11343_5c9af4f1/index.m3u8",
          }}
          ref={(ref) => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.onError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        ></Video>
      </>
    );
  }
}

let styles = StyleSheet.create({
  backgroundVideo: {
    // flex: 1,
    // justifyContent:"flex-start",
    // alignItems:"flex-start",
    backgroundColor: "red",
    position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    width: "100%",
    height: (Dimensions.get("window").width * 9) / 16.0,
  },
});

export default VideoView;
