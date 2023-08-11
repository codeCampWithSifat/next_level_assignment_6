import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const LoginPage = () => {
  return <div>LoginPage</div>;
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
