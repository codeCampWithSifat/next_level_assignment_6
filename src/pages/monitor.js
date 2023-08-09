import RootLayout from "@/components/Layout/RootLayout";
import AllMonitor from "@/components/UI/AllMonitor";

const Monitor = ({ monitors }) => {
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Ram : {monitors.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {monitors.map((monitor) => (
          <AllMonitor monitor={monitor} key={monitor._id}></AllMonitor>
        ))}
      </div>
    </>
  );
};

export default Monitor;

Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/monitor`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      monitors: data,
    },
    revalidate: 10,
  };
};
