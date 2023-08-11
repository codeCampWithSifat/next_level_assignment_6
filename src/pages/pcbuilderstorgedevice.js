import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderStorageDeviceAll from "@/components/UI/PcBuilderStorageDeviceAll";
import { useGetStorageDeviceQuery } from "@/redux/api/api";
import React from "react";

const PcBuilderStorageDevice = () => {
  const { data } = useGetStorageDeviceQuery();
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Storage Device {data?.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {data?.map((device) => (
          <PcBuilderStorageDeviceAll
            device={device}
            key={device._id}
          ></PcBuilderStorageDeviceAll>
        ))}
      </div>
    </>
  );
};

export default PcBuilderStorageDevice;

PcBuilderStorageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
