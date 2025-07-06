import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MoodTracker() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Mood Tracker
        </Typography>
        <Typography variant="body1">
          Daily mood input and trends will appear here.
        </Typography>
      </CardContent>
    </Card>
  );
}
