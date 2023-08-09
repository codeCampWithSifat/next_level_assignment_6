import RootLayout from "@/components/Layout/RootLayout";
import AllRam from "@/components/UI/AllRam";
import React from "react";

const Ram = ({ rams }) => {
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Ram : {rams.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {rams.map((ram) => (
          <AllRam ram={ram} key={ram._id}></AllRam>
        ))}
      </div>
    </>
  );
};

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/ram`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      rams: data,
    },
    revalidate: 10,
  };
};
