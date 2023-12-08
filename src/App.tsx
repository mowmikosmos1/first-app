import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { countries } from "./data";
import { CountryItem } from "./ContryItem";
import { CountryPictrue } from "./CountryPictrue";

export type countryType = {
  name: string;
  language: string;
  area: number; // in km²
  capital: string;
  continent: string;
  hasSeaAccess: boolean;
  biggestCities: string[];
};

// @ts-ignore

function App() {
  return (
    <div>
      <h1>Lista krajów</h1>
      {countries.map((country) => (
        <CountryPictrue url={country.image} name={country.name} />
      ))}

      <div>
        <h2>{countries[0].name}</h2>
        <img src={countries[0].image} height={150} />
      </div>

      {countries.map((country) => (
        <CountryItem c={country} />
      ))}
    </div>
  );
}

export default App;
