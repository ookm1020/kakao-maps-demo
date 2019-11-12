import React from "react";

import "./Main.css";

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

    // 마커가 표시될 위치입니다
    var markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    var marker = new window.kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
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
