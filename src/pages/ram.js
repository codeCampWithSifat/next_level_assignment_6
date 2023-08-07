import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const Ram = () => {
  return <div>Ram</div>;
};

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
