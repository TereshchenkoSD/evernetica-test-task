import PropTypes from "prop-types";
import { useRef } from "react";

import {
  SearchFormContainer,
  Form,
  FormBtn,
  FormBtnLabel,
  SearchInput,
} from "./SearchForm.styles";

import ResetButton from "../Button/Button";

const SearchForm = ({ onSearch, resetState, countryName }) => {
  return (
    <SearchFormContainer>
      <Form>
        <SearchInput
          type="text"
          autoComplete="off"
          minLength={1}
          debounceTimeout={500}
          onChange={(e) => onSearch(e.target.value)}
          autoFocus
          placeholder="Search images and photos"
          value={countryName}
        />
        <ResetButton onClick={resetState} />
      </Form>
    </SearchFormContainer>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchForm;
