/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";

const SingleOther = ({ singleother }) => {
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="card w-1/2 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <img src={singleother.image} alt="Shoes" className="" />
          <p>Catagory : {singleother.category}</p>
          <p>Name : {singleother.name}</p>
          <p>Price : {singleother.price}</p>
          <p>Description : {singleother.description}</p>
          <p>Individual Rating : {singleother.individual_rating}</p>
          <p>Average Rating : {singleother.average_rating}</p>
          <p>Key Feature : {singleother.key_feature}</p>
          <p> Status : {singleother.status}</p>
          <p> Review : {singleother.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleOther;

SingleOther.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/others`);
  const allOthers = await res.json();

  const paths = allOthers.map((other) => ({
    params: { singleother: other._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/singleother/${params.singleother}`
  );
  const data = await res.json();
  return {
    props: {
      singleother: data,
    },
  };
};
