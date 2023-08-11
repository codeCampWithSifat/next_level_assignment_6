/* eslint-disable @next/next/no-img-element */
import { addStorageDevice } from "@/redux/storageDeviceSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const PcBuilderStorageDeviceAll = ({ device }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const addToPc = (product) => {
    dispatch(addStorageDevice(product));
    setTimeout(() => {
      router.push("/pcbuilder");
    });
    // console.log(product);
  };
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={device.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {device.category}</h2>
        <p>Name : {device.name}</p>
        <p>Price : {device.price}</p>
        <p>Key Feature : {device.key_feature}</p>
        <p>Status : {device.status}</p>

        <button onClick={() => addToPc(device)} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default PcBuilderStorageDeviceAll;
