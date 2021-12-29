import { Typography } from "@mui/material";

function H2Component({children, props: {text}, titleName}) {
    return (
        <Typography component="h2" variant="h2">
            {text}     
        </Typography>
    )
}

export default H2Component;
