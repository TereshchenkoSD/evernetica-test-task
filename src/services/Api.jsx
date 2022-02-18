import axios from "axios";

axios.defaults.baseURL = "https://restcountries.com/v2";

export const fetchCountries = async (countryName) => {
  const params = "fields=name,alpha3Code,callingCodes,capital,flags";

  const response = await axios.get(`/name/${countryName}?${params}`);
  console.log(response);

  return response.data;
};

export const fetchCountry = async (countryName) => {
  const params =
    "fields=name,population,area,region,independent,callingCodes,capital,flags";

  const response = await axios.get(`/name/${countryName}?${params}`);
  console.log(response);

  return response.data;
};
