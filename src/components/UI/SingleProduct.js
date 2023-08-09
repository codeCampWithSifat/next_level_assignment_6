/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const SingleProduct = ({ product }) => {
  // console.log(product);
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <img src={product.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {product.category}</h2>
        <p>Name : {product.name}</p>
        <p>Price : {product.price}</p>
        <p>Key Feature : {product.key_feature}</p>
        <p>Status : {product.status}</p>
        <Link href={`/detailSingleProduct/${product._id}`}>
          <button className="btn btn-primary">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
