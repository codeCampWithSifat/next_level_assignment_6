/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const PcBuilderMonitorAll = ({ monitor }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={monitor.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {monitor.category}</h2>
        <p>Name : {monitor.name}</p>
        <p>Price : {monitor.price}</p>
        <p>Key Feature : {monitor.key_feature}</p>
        <p>Status : {monitor.status}</p>
        <Link href="/pcbuilder">
          <button className="btn btn-primary">Add</button>
        </Link>
      </div>
    </div>
  );
};

export default PcBuilderMonitorAll;
