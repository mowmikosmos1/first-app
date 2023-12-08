import { countryType } from "./App";

export const CountryItem = ({ c }: { c: countryType }) => {
  return (
    <div>
      <h2>Dane kraju: </h2>
      <li>Nazwa : {c.name}</li>
      <li>Powierzchnia : {c.area}</li>
      <li>Język : {c.language}</li>
      <li>Stolica : {c.capital}</li>
      <li>Dostęp do morza : {c.hasSeaAccess ? "tak" : "nie"}</li>
      <li>Największe miasta: {c.biggestCities.join(", ")}</li>
    </div>
  );
};
