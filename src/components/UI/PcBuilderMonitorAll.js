/* eslint-disable @next/next/no-img-element */
import { addMonitor } from "@/redux/monitorSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const PcBuilderMonitorAll = ({ monitor }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const addToPc = (product) => {
    dispatch(addMonitor(product));
    setTimeout(() => {
      router.push("/pcbuilder");
    });
    console.log("monitor", monitor);
  };
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={monitor.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {monitor.category}</h2>
        <p>Name : {monitor.name}</p>
        <p>Price : {monitor.price}</p>
        <p>Key Feature : {monitor.key_feature}</p>
        <p>Status : {monitor.status}</p>

        <button onClick={() => addToPc(monitor)} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default PcBuilderMonitorAll;
