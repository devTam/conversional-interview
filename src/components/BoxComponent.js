import { Box } from "@mui/material";

function BoxComponent({ children, props, title }) {
    console.log('fromboxtitle>>>', props);
  return <Box sx={props?.borderSize ? {border: `${props?.borderSize} solid`} : ''}>{children}</Box>;
}

export default BoxComponent;
