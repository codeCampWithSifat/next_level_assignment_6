import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const PcBuilder = () => {
  const { products } = useSelector((state) => state.cart);
  const { motherBoards } = useSelector((state) => state.motherBoard);
  const { rams } = useSelector((state) => state.ram);
  const { powerSupply } = useSelector((state) => state.powerSupply);
  const { storageDevices } = useSelector((state) => state.storageDevice);
  const { monitors } = useSelector((state) => state.monitor);
  const router = useRouter();
  const placeOrder = () => {
    toast("Place Your Order Successfully");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <>
      <div className="overflow-x-auto flex justify-center items-center ">
        <table className="table text-center w-1/2">
          {/* head */}
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Catagory</th>
              <th>Add Item Configaration</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {products?.length ? (
              products?.map((pd) => (
                <tr key={pd._id}>
                  <th className="text-xl text-violet-700 ">{pd._id}</th>
                  <td className="text-xl text-violet-700 ">{pd.name}</td>
                  <td className="text-xl text-violet-700 ">
                    price : {pd.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th className="text-xl text-violet-700 ">1</th>
                <td className="text-xl text-violet-700 ">CPU/Processor</td>
                <td>
                  <Link href="/pcbuilderprocessor" className="btn btn-primary">
                    Add Item
                  </Link>
                </td>
              </tr>
            )}

            {/* row 2 */}

            {motherBoards?.length ? (
              motherBoards.map((pd) => (
                <tr key={pd._id}>
                  <th className="text-xl text-violet-700 ">{pd._id}</th>
                  <td className="text-xl text-violet-700 ">{pd.name}</td>
                  <td className="text-xl text-violet-700 ">
                    price : {pd.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th className="text-xl text-violet-700 ">2</th>
                <td className="text-xl text-violet-700 ">Mother-Board</td>
                <td>
                  <Link
                    href="/pcbuildermotherboard"
                    className="btn btn-primary"
                  >
                    Add Item
                  </Link>
                </td>
              </tr>
            )}

            {/* row 3 */}

            {rams?.length ? (
              rams.map((pd) => (
                <tr key={pd._id}>
                  <th className="text-xl text-violet-700 ">{pd._id}</th>
                  <td className="text-xl text-violet-700 ">{pd.name}</td>
                  <td className="text-xl text-violet-700 ">
                    price : {pd.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th className="text-xl text-violet-700 ">3</th>
                <td className="text-xl text-violet-700 ">Ram</td>
                <td>
                  <Link href="/pcbuilderram" className="btn btn-primary">
                    Add Item
                  </Link>
                </td>
              </tr>
            )}

            {powerSupply?.length ? (
              powerSupply.map((pd) => (
                <tr key={pd._id}>
                  <th className="text-xl text-violet-700 ">{pd._id}</th>
                  <td className="text-xl text-violet-700 ">{pd.name}</td>
                  <td className="text-xl text-violet-700 ">
                    price : {pd.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th className="text-xl text-violet-700 ">4</th>
                <td className="text-xl text-violet-700 ">Power Supply Unit</td>
                <td>
                  <Link
                    href={"/pcbuilderpowersupplyunit"}
                    className="btn btn-primary"
                  >
                    Add Item
                  </Link>
                </td>
              </tr>
            )}

            {storageDevices?.length ? (
              storageDevices.map((pd) => (
                <tr key={pd._id}>
                  <th className="text-xl text-violet-700 ">{pd._id}</th>
                  <td className="text-xl text-violet-700 ">{pd.name}</td>
                  <td className="text-xl text-violet-700 ">
                    price : {pd.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th className="text-xl text-violet-700 ">5</th>
                <td className="text-xl text-violet-700 ">Storage Device</td>
                <td>
                  <Link
                    href="/pcbuilderstorgedevice"
                    className="btn btn-primary"
                  >
                    Add Item
                  </Link>
                </td>
              </tr>
            )}

            {monitors?.length ? (
              monitors.map((pd) => (
                <tr key={pd._id}>
                  <th className="text-xl text-violet-700 ">{pd._id}</th>
                  <td className="text-xl text-violet-700 ">{pd.name}</td>
                  <td className="text-xl text-violet-700 ">
                    price : {pd.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th className="text-xl text-violet-700 ">6</th>
                <td className="text-xl text-violet-700 ">Monitor</td>
                <td>
                  <Link href="/pcbuildermonitor" className="btn btn-primary">
                    Add Item
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={
            !products.length ||
            !motherBoards.length ||
            !rams.length ||
            !powerSupply.length ||
            !storageDevices.length ||
            !monitors.length
          }
          className="btn btn-primary m-10 "
          onClick={placeOrder}
        >
          Place Your Order
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
