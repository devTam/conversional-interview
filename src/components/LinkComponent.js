import { Button } from "@mui/material";

function LinkComponent({ children, props: { text, url }, titleName }) {
    const handleClick = () => {
        // open modal

        // open url
        window.open(url, "_blank");
    };
  return <Button onClick={handleClick}>{text}</Button>;
}

export default LinkComponent;
