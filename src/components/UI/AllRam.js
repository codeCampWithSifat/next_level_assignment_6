/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const AllRam = ({ ram }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-20">
      <div className="card-body items-center text-center">
        <img src={ram.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {ram.category}</h2>
        <p>Name : {ram.name}</p>
        <p>Price : {ram.price}</p>
        <p>Key Feature : {ram.key_feature}</p>
        <p>Status : {ram.status}</p>
        <Link href={`/singleRam/${ram._id}`}>
          <button className="btn btn-primary">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default AllRam;
