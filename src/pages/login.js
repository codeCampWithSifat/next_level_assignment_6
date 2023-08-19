import RootLayout from "@/components/Layout/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl:
                "https://next-level-assignment-6.vercel.app/pcbuilder",
            })
          }
          title="Get quote now"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Continue With Github
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
