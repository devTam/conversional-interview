import { useContext, useEffect, useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { Context } from "../context/index";

function ModalComponent({ children, props: { isOpen, width, height } }) {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    if (state.openModal) {
      dispatch({ type: "CLOSE_MODAL" });
    } else {
      setOpen(false);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open || state.openModal}>
      <DialogContent sx={{ width, height }}>{children}</DialogContent>
    </Dialog>
  );
}

export default ModalComponent;
