/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const PcBuilderPowerSupplyUnitAll = ({ power }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={power.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {power.category}</h2>
        <p>Name : {power.name}</p>
        <p>Price : {power.price}</p>
        <p>Key Feature : {power.key_feature}</p>
        <p>Status : {power.status}</p>
        <Link href="/pcbuilder">
          <button className="btn btn-primary">Add</button>
        </Link>
      </div>
    </div>
  );
};

export default PcBuilderPowerSupplyUnitAll;
