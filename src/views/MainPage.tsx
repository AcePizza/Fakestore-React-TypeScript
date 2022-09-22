import { Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import { ProductsN } from "../@types";
import CardComponent from "../components/CardComponent";
import { useFetchProducts } from "../data/useFetch";

type Props = {};

const MainPage = (props: Props) => {
  const { data } = useFetchProducts();

  console.log("data", typeof data);
  console.log("data again", data);

  return (
    <>
      <h3>Main Page</h3>
      <br />
      {data &&
        data.map((product: ProductsN.Product, index: number) => {
          return (
            <React.Fragment key={index}>
              <CardComponent
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                category={product.category}
                price={product.price}
                rating={{
                  count: product.rating.count,
                  rate: product.rating.rate,
                }}
              />
              <br />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default MainPage;
