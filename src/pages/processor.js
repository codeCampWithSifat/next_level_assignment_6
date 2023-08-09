import RootLayout from "@/components/Layout/RootLayout";
import AllProcessor from "@/components/UI/AllProcessor";
import React from "react";

const Processor = ({ processors }) => {
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Processors : {processors.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {processors.map((processor) => (
          <AllProcessor
            processor={processor}
            key={processor._id}
          ></AllProcessor>
        ))}
      </div>
    </>
  );
};

export default Processor;

Processor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/processor`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      processors: data,
    },
    revalidate: 10,
  };
};
