import React from "react";

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    var container = window.document.getElementById("map");
    var options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    new window.kakao.maps.Map(container, options);
  }

  render() {
    return (
      <div className="Main">
        <div id="map"></div>
      </div>
    );
  }
}

export default Main;
