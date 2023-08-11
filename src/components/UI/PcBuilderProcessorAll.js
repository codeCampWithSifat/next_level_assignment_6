/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const PcBuilderProcessorAll = ({ processor }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={processor.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {processor.category}</h2>
        <p>Name : {processor.name}</p>
        <p>Price : {processor.price}</p>
        <p>Key Feature : {processor.key_feature}</p>
        <p>Status : {processor.status}</p>
        <Link href="/pcbuilder">
          <button className="btn btn-primary">Add</button>
        </Link>
      </div>
    </div>
  );
};

export default PcBuilderProcessorAll;
