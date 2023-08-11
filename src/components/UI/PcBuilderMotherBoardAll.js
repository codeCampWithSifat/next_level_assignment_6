/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const PcBuilderMotherBoardAll = ({ motherboard }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={motherboard.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {motherboard.category}</h2>
        <p>Name : {motherboard.name}</p>
        <p>Price : {motherboard.price}</p>
        <p>Key Feature : {motherboard.key_feature}</p>
        <p>Status : {motherboard.status}</p>
        <Link href="/pcbuilder">
          <button className="btn btn-primary">Add</button>
        </Link>
      </div>
    </div>
  );
};

export default PcBuilderMotherBoardAll;
