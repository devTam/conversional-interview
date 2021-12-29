import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function ListComponent({ props: { li } }) {
  return (
    <List>
      {li.map((item, index) => {
        return (
          <ListItem disablePadding key={index}>
            <ListItemIcon>
              <CheckCircleOutlineIcon style={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default ListComponent;
