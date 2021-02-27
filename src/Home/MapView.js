import React from "react";
import { requireNativeComponent } from "react-native";
import PropTypes from "prop-types";

class MapView extends React.Component {
  _onRegionChange = (event) => {
    if (!this.props.onRegionChange) return;
    console.log(event.nativeEvent);
    this.props.onRegionChange(event.nativeEvent);
  };

  render() {
    return (
      <CookMap {...this.props} onRegionChange={this._onRegionChange}></CookMap>
    );
  }
}

MapView.propTypes = {
  zoomEnabled: PropTypes.bool, //是否允许用户缩放地图
  region: PropTypes.shape({
    /**
     * 地图中心点的坐标。
     */
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    /**
     * 最小/最大经、纬度间的距离。
     *
     */
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),
  onRegionChange: PropTypes.func,
};

const CookMap = requireNativeComponent("CookMap", MapView);

export default MapView;
