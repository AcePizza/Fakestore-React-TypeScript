import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFetchProducts } from "../data/useFetch";
import { ProductsN } from "../@types";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import LoadingSpinner from "../components/LoadingSpinner";
import { Box, Divider, Grid, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {};

const ProductDetails = (props: Props) => {
  const { data } = useFetchProducts();
  const productId = useParams();
  const [filteredData, setfilteredData] = useState<ProductsN.Product>();
  const redirectTo = useNavigate();

  useEffect(() => {
    const filterFunction =
      data &&
      data
        .filter((product: ProductsN.Product) => {
          return product.id === Number(productId.product);
        })
        .map((product: ProductsN.Product) => {
          setfilteredData(product);
        });
  }, [data]);

  const loader = () => (
    <Container>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="140"
          image={filteredData && filteredData.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="left">
            {filteredData && filteredData.title}
          </Typography>
          <Divider />
          <br />
          <Typography variant="body2" color="text.secondary" align="left">
            {filteredData && filteredData.description}
          </Typography>
          <br />
          <Divider />

          <Grid alignItems="flex-start" container spacing={1}>
            <Grid item xs={4}>
              <ListItem>Price: {filteredData && filteredData.price}</ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Rating: {filteredData && filteredData.rating.rate}
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Catergory: {filteredData && filteredData.category}
              </ListItem>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Box m={1} display="flex" justifyContent="center" alignItems="right">
            <Button
              onClick={() => redirectTo("/")}
              variant="text"
              color="primary"
              sx={{ height: 40 }}
            >
              Back
            </Button>
          </Box>
          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button variant="text" color="primary" sx={{ height: 40 }}>
              Two
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Container>
  );

  return (
    <Container>
      <h3>Details Page</h3>
      {data ? loader() : <LoadingSpinner />}
    </Container>
  );
};

export default ProductDetails;
