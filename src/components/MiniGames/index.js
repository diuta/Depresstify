import React from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function MiniGames() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Mini-Games!
        </Typography>
        <List>
          <ListItem button component={Link} to="pvt">
            <ListItemText primary="PVT (Reaction Time)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Stroop Test (Coming Soon)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="N-Back Test (Coming Soon)" />
          </ListItem>
        </List>
        <Outlet />
      </CardContent>
    </Card>
  );
}
