import React from "react";
import BikeStation from "../BikeStation";
const BikeStations = (props) => {
  const onClickFavHandler = (id) => {
    props.onClickFav(id);
  };
  const stations = props.availableStations?.map((station) => (
    <BikeStation
      key={station.id}
      id={station.id}
      address={station.address}
      availableStands={station.available_bike_stands}
      availableBikes={station.available_bikes}
      latitude={station.latitude}
      longitude={station.longitude}
      onClickFav={onClickFavHandler}
    />
  ));

  return <ul>{stations}</ul>;
};

export default BikeStations;
