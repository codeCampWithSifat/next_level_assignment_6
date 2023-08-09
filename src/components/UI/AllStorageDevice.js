/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const AllStorageDevice = ({ device }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-20">
      <div className="card-body items-center text-center">
        <img src={device.image} alt="Shoes" className="rounded-xl w-2/5" />
        <h2 className="">Catagory : {device.category}</h2>
        <p>Name : {device.name}</p>
        <p>Price : {device.price}</p>
        <p>Key Feature : {device.key_feature}</p>
        <p>Status : {device.status}</p>
        <Link href={`/singlestoragedevice/${device._id}`}>
          <button className="btn btn-primary">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default AllStorageDevice;
