import React from "react";
import ProductGrid from "../Components/ProductGrid";
import ReusableBanner from "../Components/ReusableBanner";

const Shop = () => {
  return (
    <>
      <ReusableBanner PageHeader={"Shop"}/>
      <ProductGrid />
    </>
  );
};

export default Shop;
