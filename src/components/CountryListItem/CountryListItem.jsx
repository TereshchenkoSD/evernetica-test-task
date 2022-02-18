import { useState } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@mui/material";
import PropTypes from "prop-types";

import {
  ListItem,
  CountryLink,
  CountryName,
  CountryCapital,
  CountryCallingCode,
  CountryCode,
  FlagImageContainer,
  FlagImage,
  CountryDataContainer,
  Form,
  DeleteButton,
} from "./CountryListItem.styles";

const CountryListItem = ({
  name,
  callingCodes,
  alpha3Code,
  capital,
  flags,
}) => {
  const [visible, setVisible] = useState(false);
  const { url } = useRouteMatch();
  const location = useLocation();

  // const onCheckboxChange = (e) => {
  //   console.log(e.target);
  // };

  const unboundCountry = () => {
    console.log("country unbounded");
  };

  const toggleShowBlock = () => {
    setVisible(!visible);
  };

  return (
    <ListItem onMouseEnter={toggleShowBlock} onMouseLeave={toggleShowBlock}>
      <CountryLink
        to={{ pathname: `${url}${name}`, state: { from: location } }}
      >
        <FlagImageContainer>
          <FlagImage src={flags.png} alt={name} />
        </FlagImageContainer>
        <CountryDataContainer>
          <CountryName>Country name: {name}</CountryName>
          <CountryCapital>Capital: {capital}</CountryCapital>
          <CountryCallingCode>Calling codes: {callingCodes}</CountryCallingCode>
          <CountryCode>Country code: {alpha3Code}</CountryCode>
        </CountryDataContainer>
      </CountryLink>
      {visible === true && (
        <Form>
          <FormControlLabel control={<Checkbox />} label="Bounded" />
          <DeleteButton type="button" onClick={unboundCountry}>
            Unbound
          </DeleteButton>
        </Form>
      )}
    </ListItem>
  );
};

CountryListItem.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
};

export default CountryListItem;
