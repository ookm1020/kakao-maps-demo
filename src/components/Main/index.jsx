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

    // 마커가 표시될 위치입니다
    //var markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    // var marker = new window.kakao.maps.Marker({
    //   position: markerPosition
    // });

    // 마커가 지도 위에 표시되도록 설정합니다
    //marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);

    // 마커 클러스터러를 생성합니다
    var clusterer = new window.kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 2 // 클러스터 할 최소 지도 레벨
    });

    // 데이터를 가져오기 위해 jQuery를 사용합니다
    // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
    var markers = sampleData.positions.map(position => {
      return new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(position.lat, position.lng)
      });
    });

    // 클러스터러에 마커들을 추가합니다
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
