import React from "react";
import { ProductsN } from "../@types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

type Props = {};

const CardComponent = (props: ProductsN.Product) => {
  const redirectTo = useNavigate();

  return (
    <Container>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description.substring(0, 50) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              redirectTo(`/details/${props.id}`);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CardComponent;
