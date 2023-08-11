/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const AllOthers = ({ other }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={other.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {other.category}</h2>
        <p>Name : {other.name}</p>
        <p>Price : {other.price}</p>
        <p>Key Feature : {other.key_feature}</p>
        <p>Status : {other.status}</p>
        <Link href={`/singleother/${other._id}`}>
          <button className="btn btn-primary">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default AllOthers;
