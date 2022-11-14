import Card from "../UI/Card";
import classes from "./BikeStation.module.css";
export default function BikeStation(props) {
  const onClickFavHandler = (id) => {
    props.onClickFav(id);
  };
  return (
    <li className={classes.station}>
      <Card>
        <h3>{props.address}</h3>
        <div className={classes.info}>
          Bike Stands available: {props.availableStands}
        </div>
        <div className={classes.info}>
          Available bikes: {props.availableBikes}
        </div>
        <button
          className={classes.button}
          onClick={() =>
            window.open(
              "https://maps.google.com?q=" +
                props.latitude +
                "," +
                props.longitude
            )
          }
        >
          Maps
        </button>
        <button
          className={classes.button}
          onClick={() => {
            onClickFavHandler(props.id);
          }}
        >
          Add to Favourite
        </button>
      </Card>
    </li>
  );
}
