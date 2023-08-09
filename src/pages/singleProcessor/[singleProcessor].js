/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const SingleProcessor = ({ singleProcessor }) => {
  // console.log(singleProcessor);
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="card w-1/2 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <img src={singleProcessor.image} alt="Shoes" />
          <p>Catagory : {singleProcessor.category}</p>
          <p>Name : {singleProcessor.name}</p>
          <p>Price : {singleProcessor.price}</p>
          <p>Description : {singleProcessor.description}</p>
          <p>Individual Rating : {singleProcessor.individual_rating}</p>
          <p>Average Rating : {singleProcessor.average_rating}</p>
          <p>Key Feature : {singleProcessor.key_feature}</p>
          <p> Status : {singleProcessor.status}</p>
          <p> Review : {singleProcessor.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProcessor;

SingleProcessor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/processor`);
  const allProcessor = await res.json();

  const paths = allProcessor.map((processor) => ({
    params: { singleProcessor: processor._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/singleProcessor/${params.singleProcessor}`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      singleProcessor: data,
    },
  };
};
