import PropTypes from "prop-types";

import {
  ListItem,
  CountryCard,
  CountryName,
  CountryCode,
} from "./CountryListItem.styles";

const CountryListItem = ({ name, callingCodes, alpha3Code }) => {
  return (
    <ListItem>
      <CountryCard>
        <CountryName>{name}</CountryName>
        <CountryCode>{callingCodes}</CountryCode>
        <p>{alpha3Code}</p>
      </CountryCard>
    </ListItem>
  );
};

CountryListItem.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
};

export default CountryListItem;
