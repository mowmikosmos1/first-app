import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { countries } from "./data";

type countryType = {
  name: string;
  language: string;
  area: number; // in km²
  capital: string;
  continent: string;
  hasSeaAccess: boolean;
  biggestCities: string[];
};

const country: countryType = {
  name: "Australia",
  language: "English",
  area: 7692024, // in km²
  capital: "Canberra",
  continent: "Oceania",
  hasSeaAccess: true,
  biggestCities: ["Sydney", "Melbourne", "Brisbane"],
};

function App() {
  return (
    <div>
      <h1>Lista krajów</h1>
      <div>
        <h2>Dane kraju: </h2>
        <li>Nazwa : {country.name}</li>
        <li>Powierzchnia : {country.area}</li>
        <li>Język : {country.language}</li>
        <li>Stolica : {country.capital}</li>
        <li>Dostęp do morza : {country.hasSeaAccess ? "tak" : "nie"}</li>
        <li>Największe miasta: {country.biggestCities.join(", ")}</li>
      </div>
    </div>
  );
}

export default App;
