import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const AllPowerSupply = ({ powersupply }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-30">
      <div className="card-body items-center text-center">
        <img src={powersupply.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {powersupply.category}</h2>
        <p>Name : {powersupply.name}</p>
        <p>Price : {powersupply.price}</p>
        <p>Key Feature : {powersupply.key_feature}</p>
        <p>Status : {powersupply.status}</p>
        <Link href={`/singlepowersupply/${powersupply._id}`}>
          <button className="btn btn-primary">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default AllPowerSupply;
