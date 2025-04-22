import styles from "./CountriesList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner></Spinner>;
  if (!cities.length)
    return (
      <Message message="Add ur first city by clicking on a city on the map"></Message>
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id}></CityItem>
      ))}
    </ul>
  );
}

export default CountriesList;
