/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const AllMonitor = ({ monitor }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <img src={monitor.image} alt="Shoes" className="rounded-xl w-1/2" />
        <h2 className="">Catagory : {monitor.category}</h2>
        <p>Name : {monitor.name}</p>
        <p>Price : {monitor.price}</p>
        <p>Key Feature : {monitor.key_feature}</p>
        <p>Status : {monitor.status}</p>
        <Link href={`/singlemonitor/${monitor._id}`}>
          <button className="btn btn-primary">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default AllMonitor;
