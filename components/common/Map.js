import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapComponent({ zipAddr, zipName }) {
  const [center, setCenter] = useState({ lat: 33.5563, lng: 126.79581 });
  useEffect(() => {
    console.log(zipAddr);
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        // "서울특별시 강남구 봉은사로108길 33",
        zipAddr ? zipAddr : "서울특별시 강남구 봉은사로108길 33",
        function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            setCenter({ lat: result[0].y, lng: result[0].x });
          }
        }
      );
    });
  }, [zipAddr]);
  return (
    <Map center={center} style={{ width: "100%", height: "360px" }}>
      <MapMarker position={center}>
        <div style={{ color: "#000" }}>{zipName}</div>
      </MapMarker>
    </Map>
  );
}

export default MapComponent;
