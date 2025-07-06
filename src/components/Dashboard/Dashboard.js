import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Dashboard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">
          Charts and trends will appear here.
        </Typography>
      </CardContent>
    </Card>
  );
}
