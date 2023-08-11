import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderMotherBoardAll from "@/components/UI/PcBuilderMotherBoardAll";
import { useGetMotherBoardQuery } from "@/redux/api/api";

const PcBuilderMotherBoard = () => {
  const { data: motherboards } = useGetMotherBoardQuery();
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Processors {motherboards?.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {motherboards?.map((motherboard) => (
          <PcBuilderMotherBoardAll
            motherboard={motherboard}
            key={motherboard._id}
          ></PcBuilderMotherBoardAll>
        ))}
      </div>
    </>
  );
};

export default PcBuilderMotherBoard;

PcBuilderMotherBoard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
