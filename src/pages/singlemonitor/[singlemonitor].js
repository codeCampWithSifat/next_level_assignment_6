/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const SingleMonitor = ({ singlemonitor }) => {
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="card w-1/2 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <img src={singlemonitor.image} alt="Shoes" className="" />
          <p>Catagory : {singlemonitor.category}</p>
          <p>Name : {singlemonitor.name}</p>
          <p>Price : {singlemonitor.price}</p>
          <p>Description : {singlemonitor.description}</p>
          <p>Individual Rating : {singlemonitor.individual_rating}</p>
          <p>Average Rating : {singlemonitor.average_rating}</p>
          <p>Key Feature : {singlemonitor.key_feature}</p>
          <p> Status : {singlemonitor.status}</p>
          <p> Review : {singlemonitor.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMonitor;

SingleMonitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/monitor`
  );
  const allMonitor = await res.json();

  const paths = allMonitor.map((monitor) => ({
    params: { singlemonitor: monitor._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/singlemonitor/${params.singlemonitor}`
  );
  const data = await res.json();
  return {
    props: {
      singlemonitor: data,
    },
  };
};
