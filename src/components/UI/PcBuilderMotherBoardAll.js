/* eslint-disable @next/next/no-img-element */
import { addMotherBoard } from "@/redux/motherBoardSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const PcBuilderMotherBoardAll = ({ motherboard }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const addToCart = (product) => {
    dispatch(addMotherBoard(product));
    // console.log("product", product);
    setTimeout(() => {
      router.push("/pcbuilder");
    });
  };
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={motherboard.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {motherboard.category}</h2>
        <p>Name : {motherboard.name}</p>
        <p>Price : {motherboard.price}</p>
        <p>Key Feature : {motherboard.key_feature}</p>
        <p>Status : {motherboard.status}</p>

        <button
          onClick={() => addToCart(motherboard)}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default PcBuilderMotherBoardAll;
