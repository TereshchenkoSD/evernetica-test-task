import PropTypes from "prop-types";
import { useRef } from "react";

import {
  SearchbarContainer,
  InputContainer,
  FormBtn,
  FormBtnLabel,
  SearchInput,
} from "./Searchbar.styles";

import ResetButton from "../Button/Button";

const Searchbar = ({ onSearch, resetState }) => {
  const inputFieldRef = useRef();

  const renewState = () => {
    resetState();
  };

  const resetSearchQuery = () => {
    inputFieldRef.current.value = "";

    renewState();
  };

  return (
    <SearchbarContainer>
      <InputContainer>
        <SearchInput
          type="text"
          autoComplete="off"
          minLength={1}
          debounceTimeout={500}
          onChange={(e) => onSearch(e.target.value)}
          autoFocus
          placeholder="Search images and photos"
          inputRef={inputFieldRef}
        />
      </InputContainer>
      <ResetButton onClick={resetSearchQuery} />
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};

export default Searchbar;
