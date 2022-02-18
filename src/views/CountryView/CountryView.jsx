import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";

import { fetchCountry } from "../../services/Api";

import {
  GoBackBtn,
  CountryTitle,
  CountryDataContainer,
  CountryFlagContainer,
  CountryFlagImage,
  CountryTextContainer,
  CountryTextItem,
  CountryTextTitle,
} from "./CountryView.styles";

const CountryView = () => {
  const history = useHistory();
  const location = useLocation();
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function getCountry() {
      try {
        const chosenCountry = await fetchCountry(countryName);
        console.log(chosenCountry[0]);
        setCountry(chosenCountry[0]);
      } catch (error) {
        console.log(error);
      }
    }

    getCountry();
  }, [countryName]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <GoBackBtn type="button" onClick={onGoBack}>
        Go back
      </GoBackBtn>
      <CountryTitle>Information about {countryName}</CountryTitle>
      {country !== null && (
        <CountryDataContainer>
          <CountryFlagContainer>
            <CountryFlagImage src={country.flags.png} alt={country.name} />
          </CountryFlagContainer>
          <CountryTextContainer>
            <ul>
              <CountryTextItem>
                <CountryTextTitle>Name:</CountryTextTitle>
                <span>{country.name}</span>
              </CountryTextItem>
              <CountryTextItem>
                <CountryTextTitle>Capital:</CountryTextTitle>
                <span>{country.capital}</span>
              </CountryTextItem>
              <CountryTextItem>
                <CountryTextTitle>Population:</CountryTextTitle>
                <span>{country.population} people</span>
              </CountryTextItem>
              <CountryTextItem>
                <CountryTextTitle>Area:</CountryTextTitle>
                <span>{country.area}</span>
              </CountryTextItem>
              <CountryTextItem>
                <CountryTextTitle>Region:</CountryTextTitle>
                <span>{country.region}</span>
              </CountryTextItem>
              <CountryTextItem>
                <CountryTextTitle>Calling code:</CountryTextTitle>
                <span>{country.callingCodes}</span>
              </CountryTextItem>
              <CountryTextItem>
                <CountryTextTitle>Independent:</CountryTextTitle>
                <span>{country.independent.toString()}</span>
              </CountryTextItem>
            </ul>
          </CountryTextContainer>
        </CountryDataContainer>
      )}
    </>
  );
};

export default CountryView;
