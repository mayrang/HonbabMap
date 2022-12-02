import React, { useEffect, useState } from "react";
import Script from "next/script";
import {Map, MapMarker} from "react-kakao-maps-sdk";

let isAlreadyLoaded = false;

const MapWrapper = () => {
    const [info, setInfo] = useState<any>()
    const [markers, setMarkers] = useState<any>([])
    const [map, setMap] = useState<any>()
    // const [stores, setStores] = useState([])
    const [loaded, setLoaded] = useState(isAlreadyLoaded);
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        if (!map) return

        const ps = new window.kakao.maps.services.Places()

        ps.keywordSearch(searchValue, (data, status, _pagination) => {
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
                console.log(bounds);
            }
        })

        
      }, [map, searchValue])
   

    //   useEffect(() => {
    //     if(markers.length > 0){
    //         setStores(markers.map((marker, idx) => (
    //             {   
    //                 key: idx,
    //                 label: (<a>hi</a>),
    //             }
    //         )))
    //     }
    //   }, [markers]);


    return (
        <>
        <Script
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_API_KEY}&autoload=false&libraries=services,clusterer,drawing`} // autoload 파라메터는 false로 지정
            onLoad={() => {
            window.kakao.maps.load(() => {
                isAlreadyLoaded = true;
                setLoaded(true);
            });
            }} // 동적으로 로드
        />
        
      {loaded&&(
        <Map  style={{ width: "100%", height: "100vh" }} center={{ lat: 36.3195,lng: 127.4574 }} onCreate={setMap}  level={3}>
        {markers?.map((marker:any) => (
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
        </Map>
      )}
  
   </>
    );
};

export default MapWrapper;