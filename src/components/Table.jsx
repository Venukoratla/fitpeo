import { lazy, useId } from "react";
import { salesData } from "../constants/data";

const Table = () => {
  const uid = useId();

  return (
    <div className="mt-8 bg-[#1F2027] rounded-md px-6 py-4">
      <div className="flex flex-wrap justify-between items-center mb-8">
        <h3 className="text-white text-left text-xl font-semibold">
          Product Sell
        </h3>
        <form className="lg:pl-2">
          <div className="flex items-center gap-2">
            <div className="relative mt-1">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />{" "}
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="table-search"
                className="bg-[#1F2027] dark:text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block text-left pl-9 p-2.5 outline-none dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>

            <div>
              <select
                id="days"
                defaultValue="30"
                className="dark:bg-[#1F2027] dark:text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-left" value="30" selected>
                  Last 30 days
                </option>
                <option className="text-left" value="15">
                  Last 15 days
                </option>
                <option className="text-left" value="7">
                  Last 7 days
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <article>
        <div className="relative overflow-x-auto">
          <table className="w-full">
            <thead className="text-gray-600 text-sm border-b ">
              <tr>
                <th
                  colSpan={2}
                  scope="col"
                  className="font-medium text-left py-3 text-white"
                >
                  Product Name
                </th>
                <th scope="col" className="font-medium text-white">
                  Stock
                </th>
                <th scope="col" className="font-medium text-white">
                  Price
                </th>
                <th scope="col" className="font-medium text-white">
                  Total Sales
                </th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((product, index) => (
                <tr
                  className="bg-[#1F2027]  dark:border-gray-700 text-sm"
                  key={index}
                >
                  <td className="py-2 w-auto md:w-20">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading={lazy}
                      className="rounded-md"
                    />
                  </td>
                  <td
                    colSpan={1}
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:bg-[#1F2027]"
                  >
                    <div className="flex flex-col ml-4">
                      <p className="text-md text-left font-semibold text-white">
                        {product.title}
                      </p>
                      <p className="text-xs text-white text-left">
                        {product.description}
                      </p>
                    </div>
                  </td>
                  <td className="py-2 text-white">{product.stock} in stock</td>
                  <td className="py-2 text-white font-semibold">
                    $ {product.price}
                  </td>
                  <td className="py-2 text-white">{product.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};

export default Table;
