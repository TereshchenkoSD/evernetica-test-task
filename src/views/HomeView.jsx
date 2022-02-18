import { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";

import SearchForm from "../components/SearchForm";

import { fetchCountries } from "../services/Api";

import Loader from "../components/Loader";

import CountryList from "../components/CountryList";

const HomeView = () => {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);
  const [reqStatus, setReqStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleNameChange = (countryName) => {
    setCountryName(countryName);
  };

  useEffect(() => {
    if (countries.length > 10) {
      toast("Too many matches. Please enter more specific name.");
    }
  }, [countries.length]);

  useEffect(() => {
    if (countryName === "") {
      return;
    }
    async function getCountries() {
      try {
        setReqStatus("pending");
        setCountries([]);
        const countries = await fetchCountries(countryName);
        setReqStatus("resolved");
        setCountries(countries);
      } catch (error) {
        setReqStatus("rejected");
        toast.error("No country with this name");
      }
    }

    getCountries();
  }, [countryName]);

  const resetState = () => {
    setCountryName("");
    setCountries([]);
    setReqStatus("idle");
  };

  const showCountryList =
    countries.length >= 1 && countries.length < 10 && countryName !== "";

  // const showCountryInfo = countries.length === 1;

  return (
    <>
      {error && toast.error("No such countries!")}
      <SearchForm
        onSearch={handleNameChange}
        resetState={resetState}
        countryName={countryName}
      />
      {reqStatus === "pending" && <Loader />}
      {showCountryList && <CountryList countries={countries} />}
      <Toaster position="top-right" />
    </>
  );
};

export default HomeView;
