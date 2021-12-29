import { Typography } from "@mui/material";

function H1Component({ props: { text } }) {
  return (
    <Typography component="h1" variant="h1">
      {text}
    </Typography>
  );
}

export default H1Component;
