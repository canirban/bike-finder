import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BikeStations from "../BikeStations";
import Card from "../UI/Card";
import classes from "./AvailableStations.module.css";

const AvailableStations = ({ availableStations }) => {
  const [allStations, setAllStations] = useState([]); // updated only when a station is set as favourite
  const [stations, setStations] = useState([]);
  useEffect(() => {
    setStations(availableStations);
    setAllStations(availableStations);
  }, [availableStations]);
  const textInputHandler = (e) => {
    const results = allStations?.filter((station) => {
      return (
        station?.address
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim()) ||
        station?.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim()) ||
        station?.available_bikes.toString().includes(e.target.value) ||
        station?.available_bike_stands.toString().includes(e.target.value)
      );
    });
    setStations(results);
  };
  const onClickFavHandler = (id) => {
    const index = stations?.findIndex((station) => station.id === id);
    let stationsList = [...stations];
    stationsList.unshift(stationsList.splice(index, 1)[0]);
    setStations(stationsList);
    setAllStations(stationsList);
  };
  return (
    <>
      <section className={classes.stations}>
        <input
          className={classes.input}
          type="text"
          placeholder="search stations"
          onInput={textInputHandler}
        />
        {stations.length ? (
          <BikeStations
            availableStations={stations}
            onClickFav={onClickFavHandler}
          />
        ) : (
          <Card>
            <p>No available stations</p>
          </Card>
        )}
      </section>
    </>
  );
};

export default AvailableStations;
