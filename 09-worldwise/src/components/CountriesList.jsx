import { useCities } from "../context/CitiesContext";
import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";

function CountriesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add ur first city by clicking on a city on the map"></Message>
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji, id: city.id }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id}></CountryItem>
      ))}
    </ul>
  );
}

export default CountriesList;
