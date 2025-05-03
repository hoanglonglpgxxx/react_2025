import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { useCities } from "../context/CitiesContext";

function CitiesList() {
  const { cities, isLoading } = useCities();
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

export default CitiesList;
