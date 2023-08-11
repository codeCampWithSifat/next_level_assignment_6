/* eslint-disable @next/next/no-img-element */
import { addRam } from "@/redux/ramSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const PcBuilderRamAll = ({ ram }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const addToPc = (product) => {
    dispatch(addRam(product));
    setTimeout(() => {
      router.push("/pcbuilder");
    });
    // console.log("product", product);
  };
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={ram.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {ram.category}</h2>
        <p>Name : {ram.name}</p>
        <p>Price : {ram.price}</p>
        <p>Key Feature : {ram.key_feature}</p>
        <p>Status : {ram.status}</p>

        <button onClick={() => addToPc(ram)} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default PcBuilderRamAll;
