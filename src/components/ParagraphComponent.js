import { Typography } from "@mui/material";

function ParagraphComponent({children, props: { text }, titleName}) {
    return (
        <Typography>
            {text}     
        </Typography>
    )
}

export default ParagraphComponent;
