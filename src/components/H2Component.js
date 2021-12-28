import { Typography } from "@mui/material";

function H2Component({children, props: {text}, titleName}) {
    console.log('fromh2title>>>', titleName);
    return (
        <Typography component="h2">
            {text}     
        </Typography>
    )
}

export default H2Component;
