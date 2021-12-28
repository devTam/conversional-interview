import { Typography } from "@mui/material";

function H1Component({children, props: { text }, titleName}) {
    return (
        <Typography component="h1">
            {text}     
        </Typography>
    )
}

export default H1Component;
