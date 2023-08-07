import { useRouter } from "next/router";
import React from "react";

const PageNotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div className="flex justify-center items-center min-h-screen text-5xl text-red-700">
      <h1>Page Not Found...................</h1>
    </div>
  );
};

export default PageNotFound;
