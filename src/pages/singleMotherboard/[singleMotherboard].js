/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const SingleMotherboard = ({ singleMotherboard }) => {
  // console.log(singleMotherboard);
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="card w-1/2 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <img src={singleMotherboard.image} alt="Shoes" />
          <p>Catagory : {singleMotherboard.category}</p>
          <p>Name : {singleMotherboard.name}</p>
          <p>Price : {singleMotherboard.price}</p>
          <p>Description : {singleMotherboard.description}</p>
          <p>Individual Rating : {singleMotherboard.individual_rating}</p>
          <p>Average Rating : {singleMotherboard.average_rating}</p>
          <p>Key Feature : {singleMotherboard.key_feature}</p>
          <p> Status : {singleMotherboard.status}</p>
          <p> Review : {singleMotherboard.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMotherboard;

SingleMotherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/motherboard`);
  const allMotherboard = await res.json();

  const paths = allMotherboard.map((motherboard) => ({
    params: { singleMotherboard: motherboard._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/singleMotherboard/${params.singleMotherboard}`
  );
  const data = await res.json();
  return {
    props: {
      singleMotherboard: data,
    },
  };
};
