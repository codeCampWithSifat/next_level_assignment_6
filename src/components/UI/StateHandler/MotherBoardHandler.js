import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const MotherBoardHandler = () => {
  const { products } = useSelector((state) => state.cart);
  console.log(products);
  return (
    <div>
      {products?.length ? (
        products.map((pd) => (
          <tr key={pd._id}>
            <th className="text-xl text-violet-700 ">{pd._id}</th>
            <td className="text-xl text-violet-700 ">{pd.name}</td>
            <td className="text-xl text-violet-700 ">price : {pd.price}</td>
          </tr>
        ))
      ) : (
        <tr>
          <th className="text-xl text-violet-700 ">2</th>
          <td className="text-xl text-violet-700 ">Mother-Board</td>
          <td>
            <Link href="/pcbuildermotherboard" className="btn btn-primary">
              Add Item
            </Link>
          </td>
        </tr>
      )}
    </div>
  );
};

export default MotherBoardHandler;
