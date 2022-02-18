import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { FormGroup } from "@mui/material";

export const ListItem = styled.li`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const CountryLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const FlagImageContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 160px;
`;

export const FlagImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CountryDataContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;

  margin-bottom: 10px;
`;
export const CountryName = styled.p`
  margin-bottom: 5px;
`;

export const CountryCapital = styled.p`
  margin-bottom: 5px;
`;

export const CountryCallingCode = styled.p`
  margin-bottom: 5px;
`;

export const CountryCode = styled.p``;

export const Form = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled.button`
  width: 100%;
  max-width: 100px;
  height: 30px;
  padding-top: 2px;
  padding-bottom: 2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(33, 33, 33, 1);
  background-color: rgba(156, 156, 156, 1);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.875;
  letter-spacing: 0.06em;
  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: rgba(245, 244, 250, 1);
    background-color: rgba(33, 150, 243, 1);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
