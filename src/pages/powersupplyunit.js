import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const PowerSupplyUnit = () => {
  return <div>PowerSupplyUnit</div>;
};

export default PowerSupplyUnit;

PowerSupplyUnit.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
