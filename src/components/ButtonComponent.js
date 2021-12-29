import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context";

function ButtonComponent({ props: { text, triggerModal } }) {
  const { dispatch } = useContext(Context);

  const handleClick = () => {
    if (triggerModal) {
      dispatch({ type: "OPEN_MODAL" });
    }
    console.log("Button clicked");
  };
  return (
    <Button
      fullWidth
      sx={{ margin: ".5em 0" }}
      variant="contained"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}

export default ButtonComponent;
