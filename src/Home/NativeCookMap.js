import React from "react";
import MapView from "./MapView";

class NativeCookMap extends React.Component {
  onRegionChange(event) {

  }
  render() {
    const region = {
      latitude: 30.658281,
      longitude: 104.066937,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    return (
      <MapView
        zoomEnabled={false}
        region={region}
        onRegionChange={this.onRegionChange}
        style={{ flex: 1 }}
      ></MapView>
    );
  }
}

export default NativeCookMap;
