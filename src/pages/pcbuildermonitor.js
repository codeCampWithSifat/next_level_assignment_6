import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderMonitorAll from "@/components/UI/PcBuilderMonitorAll";
import { useGetMonitorQuery } from "@/redux/api/api";
import React from "react";

const PcBuilderMonitor = () => {
  const { data } = useGetMonitorQuery();
  console.log(data);
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Monitor {data?.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {data?.map((monitor) => (
          <PcBuilderMonitorAll
            monitor={monitor}
            key={monitor._id}
          ></PcBuilderMonitorAll>
        ))}
      </div>
    </>
  );
};

export default PcBuilderMonitor;

PcBuilderMonitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
