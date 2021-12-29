import { Box } from "@mui/material";

function BoxComponent({ children, props }) {
  return (
    <Box
      p={5}
      m={5}
      sx={props?.borderSize && { border: `${props?.borderSize} solid` }}
    >
      {children}
    </Box>
  );
}

export default BoxComponent;
