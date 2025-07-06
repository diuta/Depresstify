import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Settings() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1">
          Privacy, data export, and opt-out options will appear here.
        </Typography>
      </CardContent>
    </Card>
  );
}
