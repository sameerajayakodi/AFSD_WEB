import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
export default function Clear({ onClear }) {
  return (
    <Button
      style={{ width: "150px", height: "50px" }}
      onClick={onClear}
      variant="contained"
    >
      clean
    </Button>
  );
}
