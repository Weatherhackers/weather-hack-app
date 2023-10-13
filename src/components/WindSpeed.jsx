import React from 'react';

export default function WindSpeed({ windData }) {
  // console.log(windData); 

  if (windData && windData.speed) {
    return (
      <div>
        <p>Wind Speed: {windData.speed} m/s</p>
      </div>
    );
  }
    return null;
}
