/* eslint-disable @next/next/no-img-element */
import { addProcessor } from "@/redux/cartSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const PcBuilderProcessorAll = ({ processor }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const addForCart = (product) => {
    dispatch(addProcessor(product));
    setTimeout(() => {
      router.push("/pcbuilder");
    });
    // console.log("product", product);
  };
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={processor.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {processor.category}</h2>
        <p>Name : {processor.name}</p>
        <p>Price : {processor.price}</p>
        <p>Key Feature : {processor.key_feature}</p>
        <p>Status : {processor.status}</p>

        <button
          onClick={() => addForCart(processor)}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default PcBuilderProcessorAll;
