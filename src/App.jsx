import { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";

import { Switch, Route } from "react-router-dom";

import SearchForm from "./components/SearchForm";

import { fetchCountries } from "./components/services/Api";

import Loader from "./components/Loader";

import CountryList from "./components/CountryList";

import { AppContainer } from "./App.styles";

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);
  const [reqStatus, setReqStatus] = useState("idle");
  // const [page, setPage] = useState(1);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedImage, setSelectedImage] = useState("");
  const [error, setError] = useState(null);

  // const showImages = images.length > 11;

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

  const showCountryInfo = countries.length === 1;

  // useEffect(() => {
  //   if (!imageName) {
  //     return;
  //   }
  //   setReqStatus("pending");

  //   async function onFetchImages() {
  //     try {
  //       const images = await fetchImages(page, imageName);
  //       setImages((prevState) => [...prevState, ...images]);
  //       setReqStatus("resolved");
  //     } catch (error) {
  //       setReqStatus("rejected");
  //       setError(true);
  //       toast.error("Ooops, there is no such image");
  //     }
  //   }

  //   onFetchImages();

  //   if (page > 1) {
  //     scrollPageToEnd();
  //   }
  // }, [page, imageName]);

  // const handleFormSubmit = (imageName) => {
  //   if (imageName.trim() === "") {
  //     toast.error("Invalid search query");
  //     return;
  //   }
  //   resetState();
  //   setImageName(imageName);
  // };

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  // const handleSelectedImage = (data) => {
  //   setSelectedImage(data);
  //   toggleModal();
  // };

  // const scrollPageToEnd = () => {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }, 1000);
  // };

  // const onLoadMoreBtn = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  // const resetState = () => {
  //   setImageName(null);
  //   setPage(1);
  //   setImages([]);
  //   setReqStatus("idle");
  // };

  return (
    <AppContainer>
      {error && toast.error("No such countries!")}
      <SearchForm
        onSearch={handleNameChange}
        resetState={resetState}
        countryName={countryName}
      />
      {reqStatus === "pending" && <Loader />}
      {showCountryList && <CountryList countries={countries} />}
      <Toaster position="top-right" />
    </AppContainer>
  );
};

export default App;
