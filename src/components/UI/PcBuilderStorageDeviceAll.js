/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const PcBuilderStorageDeviceAll = ({ device }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={device.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {device.category}</h2>
        <p>Name : {device.name}</p>
        <p>Price : {device.price}</p>
        <p>Key Feature : {device.key_feature}</p>
        <p>Status : {device.status}</p>
        <Link href="/pcbuilder">
          <button className="btn btn-primary">Add</button>
        </Link>
      </div>
    </div>
  );
};

export default PcBuilderStorageDeviceAll;
