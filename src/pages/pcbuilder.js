import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";
import React from "react";

const PcBuilder = () => {
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
            <tr>
              <th className="text-xl text-violet-700 ">1</th>
              <td className="text-xl text-violet-700 ">CPU/Processor</td>
              <td>
                <Link href="/pcbuilderprocessor" className="btn btn-primary">
                  Add Item
                </Link>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="text-xl text-violet-700 ">2</th>
              <td className="text-xl text-violet-700 ">Mother-Board</td>
              <td>
                <Link href="/pcbuildermotherboard" className="btn btn-primary">
                  Add Item
                </Link>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="text-xl text-violet-700 ">3</th>
              <td className="text-xl text-violet-700 ">Ram</td>
              <td>
                <Link href="/pcbuilderram" className="btn btn-primary">
                  Add Item
                </Link>
              </td>
            </tr>

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
            <tr>
              <th className="text-xl text-violet-700 ">5</th>
              <td className="text-xl text-violet-700 ">Storage Device</td>
              <td>
                <button className="btn btn-primary">Add Item</button>
              </td>
            </tr>

            <tr>
              <th className="text-xl text-violet-700 ">6</th>
              <td className="text-xl text-violet-700 ">Monitor</td>
              <td>
                <button className="btn btn-primary">Add Item</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
