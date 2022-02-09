import Button from "@mui/material/Button";

export default function ResetButton({ onClick }) {
  return (
    <Button variant="contained" color="grey" onClick={onClick}>
      Reset
    </Button>
  );
}

// import PropTypes from "prop-types";

// import { MoreButton } from "./Button.styles";

// const LoadMoreButton = ({ onClick }) => {
//   return (
//     <MoreButton type="submit" onClick={onClick}>
//       Load more
//     </MoreButton>
//   );
// };

// LoadMoreButton.defaultProps = {
//   onClick: () => null,
// };

// LoadMoreButton.propTypes = {
//   onClick: PropTypes.func,
// };

// export default LoadMoreButton;
