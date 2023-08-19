/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const SingleStorageDevice = ({ singledevice }) => {
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="card w-1/2 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <img src={singledevice.image} alt="Shoes" className="w-2/5" />
          <p>Catagory : {singledevice.category}</p>
          <p>Name : {singledevice.name}</p>
          <p>Price : {singledevice.price}</p>
          <p>Description : {singledevice.description}</p>
          <p>Individual Rating : {singledevice.individual_rating}</p>
          <p>Average Rating : {singledevice.average_rating}</p>
          <p>Key Feature : {singledevice.key_feature}</p>
          <p> Status : {singledevice.status}</p>
          <p> Review : {singledevice.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleStorageDevice;

SingleStorageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/storagedevice`
  );
  const allStorageDevice = await res.json();

  const paths = allStorageDevice.map((storage) => ({
    params: { singlestoragedevice: storage._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/singlestoragedevice/${params.singlestoragedevice}`
  );
  const data = await res.json();
  return {
    props: {
      singledevice: data,
    },
  };
};
