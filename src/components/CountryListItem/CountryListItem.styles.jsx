import styled from "@emotion/styled/macro";

export const ListItem = styled.li`
  width: 100%;
  height: 280px;
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
