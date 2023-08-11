import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderProcessorAll from "@/components/UI/PcBuilderProcessorAll";
import { useGetProcessorQuery } from "@/redux/api/api";

const PcBuilderProcessor = () => {
  const { data: processors } = useGetProcessorQuery();
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Processors {processors?.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {processors?.map((processor) => (
          <PcBuilderProcessorAll
            processor={processor}
            key={processor._id}
          ></PcBuilderProcessorAll>
        ))}
      </div>
    </>
  );
};

export default PcBuilderProcessor;

PcBuilderProcessor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
