import React from "react";
import SingleProduct from "./SingleProduct";

const AllProducts = ({ allProducts }) => {
  // console.log(allProducts);
  return (
    <div>
      <h1 className="text-violet-700 text-center text-3xl font-bold">
        View All Of The Products
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        {allProducts.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
