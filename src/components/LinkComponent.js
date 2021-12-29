import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context";

function LinkComponent({ props: { text, url, triggerModal } }) {
  const { dispatch } = useContext(Context);
  const handleClick = () => {
    if (triggerModal) {
      dispatch({ type: "OPEN_MODAL" });
    }

    // open url
    window.open(url, "_blank");
  };
  return (
    <Button
      fullWidth
      sx={{ margin: ".5em 0" }}
      variant="outlined"
      color="secondary"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}

export default LinkComponent;
