import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const Processor = () => {
  return <div>this is processor</div>;
};

export default Processor;

Processor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
