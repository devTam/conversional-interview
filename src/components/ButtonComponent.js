import { Button } from "@mui/material";

function ButtonComponent({ children, props: { text }, titleName }) {
  const handleClick = () => {
    // open modal
  };
  return <Button onClick={handleClick}>{text}</Button>;
}

export default ButtonComponent;
