import React from "react";
import MainLayout from "./Partials/MainLayout";
import diet from "./Data/diet-data";
import Diet_details from "./Diet-details";
import Grid from "@material-ui/core/Grid";

export default function Diet(props) {
  return (
    <MainLayout history={props.history}>
      <Grid container spacing={3}>
        {diet.map((diet) => (
          <Diet_details title={diet.title} description={diet.description} />
        ))}
      </Grid>
    </MainLayout>
  );
}
