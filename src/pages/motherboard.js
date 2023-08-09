import RootLayout from "@/components/Layout/RootLayout";
import AllMotherboard from "@/components/UI/AllMotherboard";

const MotherBoard = ({ motherboards }) => {
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The MotherBoard : {motherboards.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {motherboards.map((motherboard) => (
          <AllMotherboard
            motherboard={motherboard}
            key={motherboard._id}
          ></AllMotherboard>
        ))}
      </div>
    </>
  );
};

export default MotherBoard;

MotherBoard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/motherboard`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      motherboards: data,
    },
    revalidate: 10,
  };
};
