/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layout/RootLayout";

const DetailSingleProduct = ({ singleProduct }) => {
  // console.log(singleProduct);
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="card w-1/2 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <img src={singleProduct.image} alt="Shoes" />
          <p>Catagory : {singleProduct.category}</p>
          <p>Name : {singleProduct.name}</p>
          <p>Price : {singleProduct.price}</p>
          <p>Description : {singleProduct.description}</p>
          <p>Individual Rating : {singleProduct.individual_rating}</p>
          <p>Average Rating : {singleProduct.average_rating}</p>
          <p>Key Feature : {singleProduct.key_feature}</p>
          <p> Status : {singleProduct.status}</p>
          <p> Review : {singleProduct.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailSingleProduct;

DetailSingleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/detailSingleProduct/${params.detailSingleProduct}`
  );
  const data = await res.json();
  return {
    props: {
      singleProduct: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://next-level-assignment-6.vercel.app/api/allProducts`
  );
  const allProducts = await res.json();

  const paths = allProducts.map((product) => ({
    params: { detailSingleProduct: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};
