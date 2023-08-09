/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const SinglePowerSupply = ({ singlepowersupply }) => {
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="card w-1/2 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <img src={singlepowersupply.image} alt="Shoes" />
          <p>Catagory : {singlepowersupply.category}</p>
          <p>Name : {singlepowersupply.name}</p>
          <p>Price : {singlepowersupply.price}</p>
          <p>Description : {singlepowersupply.description}</p>
          <p>Individual Rating : {singlepowersupply.individual_rating}</p>
          <p>Average Rating : {singlepowersupply.average_rating}</p>
          <p>Key Feature : {singlepowersupply.key_feature}</p>
          <p> Status : {singlepowersupply.status}</p>
          <p> Review : {singlepowersupply.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePowerSupply;

SinglePowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/powersupply`);
  const allPowerSupply = await res.json();

  const paths = allPowerSupply.map((powersupply) => ({
    params: { singlepowersupply: powersupply._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/singlepowersupply/${params.singlepowersupply}`
  );
  const data = await res.json();
  return {
    props: {
      singlepowersupply: data,
    },
  };
};
