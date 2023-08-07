import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const MotherBoard = () => {
  return <div>MotherBoard</div>;
};

export default MotherBoard;

MotherBoard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
