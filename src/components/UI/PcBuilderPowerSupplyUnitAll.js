/* eslint-disable @next/next/no-img-element */
import { addMotherBoard } from "@/redux/cartSlice";
import { addPowerSupply } from "@/redux/powerSupplySlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const PcBuilderPowerSupplyUnitAll = ({ power }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const addForCart = (product) => {
    dispatch(addPowerSupply(product));
    setTimeout(() => {
      router.push("/pcbuilder");
    });
    // console.log("product", product);
  };
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={power.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {power.category}</h2>
        <p>Name : {power.name}</p>
        <p>Price : {power.price}</p>
        <p>Key Feature : {power.key_feature}</p>
        <p>Status : {power.status}</p>

        <button onClick={() => addForCart(power)} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default PcBuilderPowerSupplyUnitAll;
