import PropTypes from "prop-types";

import { CountryGallery } from "./CountryList.styles";
import CountryListItem from "../CountryListItem";

const CountryList = ({ countries }) => {
  return (
    <CountryGallery>
      {countries.map(({ name, callingCodes, alpha3Code, flags, capital }) => (
        <CountryListItem
          key={name}
          name={name}
          callingCodes={callingCodes}
          alpha3Code={alpha3Code}
          flags={flags}
          capital={capital}
        />
      ))}
    </CountryGallery>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      callingCodes: PropTypes.array,
      alpha3Code: PropTypes.string,
      flags: PropTypes.object,
      capital: PropTypes.string,
    })
  ),
};

export default CountryList;
