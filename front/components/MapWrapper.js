import Script from 'next/script';
import React, {useEffect, useState} from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';
import PropTypes from "prop-types";;


let isAlreadyLoaded = false;

const MapWrapper = ({onCreate, children}) => {
  const [loaded, setLoaded] = useState(isAlreadyLoaded);
  

 

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
      {loaded && 
      <Map  style={{ width: "100%", height: "100vh" }} center={{ lat: 36.3195,lng: 127.4574 }} onCreate={onCreate} level={3}>
       {children}
      </Map>}
    </>
  );
};

MapWrapper.propTypes = {
  onCreate: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node
  ])
}

export default MapWrapper;