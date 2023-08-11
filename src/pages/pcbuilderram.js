import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderRamAll from "@/components/UI/PcBuilderRamAll";
import { useGetRamQuery } from "@/redux/api/api";
import React from "react";

const PcBuilderRam = () => {
  const { data: rams } = useGetRamQuery();
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Rams {rams?.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {rams?.map((ram) => (
          <PcBuilderRamAll ram={ram} key={ram._id}></PcBuilderRamAll>
        ))}
      </div>
    </>
  );
};

export default PcBuilderRam;

PcBuilderRam.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
