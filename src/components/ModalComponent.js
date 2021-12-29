import { useContext } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { Context } from "../context/index";

function ModalComponent({ children, props: { isOpen, width, height } }) {
  const { state, dispatch } = useContext(Context);

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <Dialog onClose={handleClose} open={isOpen ? isOpen : state.openModal}>
      <DialogContent sx={{ width, height }}>{children}</DialogContent>
    </Dialog>
  );
}

export default ModalComponent;
