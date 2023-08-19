/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";

const SingleRam = ({ singleRam }) => {
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="card w-1/2 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <img src={singleRam.image} alt="Shoes" />
          <p>Catagory : {singleRam.category}</p>
          <p>Name : {singleRam.name}</p>
          <p>Price : {singleRam.price}</p>
          <p>Description : {singleRam.description}</p>
          <p>Individual Rating : {singleRam.individual_rating}</p>
          <p>Average Rating : {singleRam.average_rating}</p>
          <p>Key Feature : {singleRam.key_feature}</p>
          <p> Status : {singleRam.status}</p>
          <p> Review : {singleRam.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRam;

SingleRam.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://next-level-assignment-6.vercel.app/api/ram`);
  const allRam = await res.json();

  const paths = allRam.map((ram) => ({
    params: { singleRam: ram._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/singleRam/${params.singleRam}`
  );
  const data = await res.json();
  return {
    props: {
      singleRam: data,
    },
  };
};
