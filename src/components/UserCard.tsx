import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { User } from "../@types";

export default function UserCard(props: User) {
  console.log("props", props);
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.username}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.email}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.address.city}
          </Typography>
          <Typography variant="body2">{props.phone}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <br />
    </>
  );
}
