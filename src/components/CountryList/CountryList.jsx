import PropTypes from "prop-types";

import { CountryGallery } from "./CountryList.styles";
import CountryListItem from "../CountryListItem";

const CountryList = ({ countries }) => {
  return (
    <CountryGallery>
      {countries.map(({ name, callingCodes, alpha3Code }) => (
        <CountryListItem
          key={name}
          name={name}
          callingCodes={callingCodes}
          alpha3Code={alpha3Code}
        />
      ))}
    </CountryGallery>
  );
};

CountryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};

export default CountryList;
