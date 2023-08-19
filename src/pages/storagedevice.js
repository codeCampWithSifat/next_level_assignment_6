import RootLayout from "@/components/Layout/RootLayout";
import AllStorageDevice from "@/components/UI/AllStorageDevice";

const StorageDevice = ({ storagedevice }) => {
  return (
    <>
      <div>
        <h1 className="text-violet-700 text-2xl text-center font-bold mt-8">
          Number All The Ram : {storagedevice.length}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
        {storagedevice.map((device) => (
          <AllStorageDevice device={device} key={device._id}></AllStorageDevice>
        ))}
      </div>
    </>
  );
};

export default StorageDevice;

StorageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/storagedevice`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      storagedevice: data,
    },
    revalidate: 10,
  };
};
