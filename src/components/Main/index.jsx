import React from "react";

import "./Main.css";

import { sampleData } from "../../apis/kakao";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    var mapContainer = window.document.getElementById("map");

    var options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    var map = new window.kakao.maps.Map(mapContainer, options);

    var clusterer = new window.kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 2
    });

    var markers = sampleData.positions.map(position => {
      return new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(position.lat, position.lng)
      });
    });

    clusterer.addMarkers(markers);
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
