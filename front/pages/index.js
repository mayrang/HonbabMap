import React, { useEffect, useState } from "react";
import MapWrapper from "../components/MapWrapper";
import { MapMarker } from "react-kakao-maps-sdk";
import MenuLayout from "../components/MenuLayout";
import { Card, Col, Dropdown, List, Row } from "antd";

const Home = () => {
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()
    const [stores, setStores] = useState([])


    useEffect(() => {
        if (!map) return

        const ps = new window.kakao.maps.services.Places()

        ps.keywordSearch("순중매", (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new window.kakao.maps.LatLngBounds()
            let markers = []

            for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
                position: {
                lat: data[i].y,
                lng: data[i].x,
                },
                content: data[i].place_name,
            })
            // @ts-ignore
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
            }
            setMarkers(markers)

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds)
        }
        })

        
      }, [map])

      useEffect(() => {
        if(markers.length > 0){
            setStores(markers.map((marker, idx) => (
                {   
                    key: idx,
                    label: (<a>hi</a>),
                }
            )))
        }
      }, [markers]);

    return (
        <>
        <MenuLayout />

        <MapWrapper onCreate={setMap}>
            {markers.map((marker) => (
            <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}

            >
            {info &&info.content === marker.content && (
                <div style={{color:"#000"}}>{marker.content}</div>
            )}
            </MapMarker>
            ))}
        </MapWrapper>
        </>
    )
}

export default Home;