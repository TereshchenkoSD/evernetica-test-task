import PropTypes from "prop-types";

import {
  ListItem,
  CountryName,
  CountryCapital,
  CountryCallingCode,
  CountryCode,
  FlagImageContainer,
  FlagImage,
  CountryDataContainer,
} from "./CountryListItem.styles";

const CountryListItem = ({
  name,
  callingCodes,
  alpha3Code,
  capital,
  flags,
}) => {
  return (
    <ListItem>
      <FlagImageContainer>
        <FlagImage src={flags.png} alt={name} />
      </FlagImageContainer>
      <CountryDataContainer>
        <CountryName>Country name: {name}</CountryName>
        <CountryCapital>Capital: {capital}</CountryCapital>
        <CountryCallingCode>Calling codes: {callingCodes}</CountryCallingCode>
        <CountryCode>Country code: {alpha3Code}</CountryCode>
      </CountryDataContainer>
    </ListItem>
  );
};

CountryListItem.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
};

export default CountryListItem;
