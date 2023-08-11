import RootLayout from "@/components/Layout/RootLayout";
import AllOthers from "@/components/UI/AllOthers";
import React from "react";

const Others = ({ others }) => {
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Other Element : {others.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {others.map((other) => (
          <AllOthers other={other} key={other._id}></AllOthers>
        ))}
      </div>
    </>
  );
};

export default Others;

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/others`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      others: data,
    },
    revalidate: 10,
  };
};
