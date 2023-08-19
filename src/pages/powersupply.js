import RootLayout from "@/components/Layout/RootLayout";
import AllPowerSupply from "@/components/UI/AllPowerSupply";

const PowerSupplyUnit = ({ powersupplies }) => {
  return (
    <>
      <div className="mt-30">
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Ram : {powersupplies.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {powersupplies.map((powersupply) => (
          <AllPowerSupply
            powersupply={powersupply}
            key={powersupply._id}
          ></AllPowerSupply>
        ))}
      </div>
    </>
  );
};

export default PowerSupplyUnit;

PowerSupplyUnit.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/powersupply`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      powersupplies: data,
    },
    revalidate: 10,
  };
};
