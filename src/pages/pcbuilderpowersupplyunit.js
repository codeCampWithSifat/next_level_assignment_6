import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderPowerSupplyUnitAll from "@/components/UI/PcBuilderPowerSupplyUnitAll";
import { useGetPowerSupplyQuery } from "@/redux/api/api";
import React from "react";

const PcBuilerPowerSupplyUnit = () => {
  const { data } = useGetPowerSupplyQuery();
  console.log(data);
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Rams {data?.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {data?.map((power) => (
          <PcBuilderPowerSupplyUnitAll
            power={power}
            key={power._id}
          ></PcBuilderPowerSupplyUnitAll>
        ))}
      </div>
    </>
  );
};

export default PcBuilerPowerSupplyUnit;

PcBuilerPowerSupplyUnit.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
