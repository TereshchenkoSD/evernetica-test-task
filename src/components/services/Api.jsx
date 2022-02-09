import axios from "axios";

axios.defaults.baseURL = "https://restcountries.com/v2";

export const fetchCountries = async (countryName) => {
  const params = "fields=name,alpha3Code,callingCodes";

  const response = await axios.get(`/name/${countryName}?${params}`);
  console.log(response);

  return response.data;
};

// axios.defaults.baseURL = `https://pixabay.com/api/`;

// export const fetchImages = async (page, imageName) => {
//   const API_KEY = "21751428-6a671782556cc1e6de8f90ab7";

//   const url = `?image_type=photo&orientation=horizontal&q=${imageName}&page=${page}&per_page=12&key=${API_KEY}`;

//   const response = await axios.get(url);

//   return response.data.hits;
// };
