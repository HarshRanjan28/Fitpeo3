import { useState, useMemo } from "react";
import Table from "../Table";
import { tableData } from "../../utils/tableData";

const RecentOrderList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Customer",
        Cell: (rowData: any) => {
          return (
            <div className="flex justify-start w-full lg:flex items-center">
              <div className="hidden md:block w-10 rounded-full">
                <img src="/mydp.jpeg" alt="dp" className="rounded-full" />
              </div>
              <span className="px-4 w-full">
                {rowData.row.original.customer}
              </span>
            </div>
          );
        },
      },
      {
        Header: "Order No.",
        accessor: "OrderNo",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        Cell: (rowData: any) => {
          if (rowData.row.original.status === "Delivered") {
            return (
              <button className="text-white bg-green-600 rounded-lg px-2 hidden md:block">
                Delivered
              </button>
            );
          } else if (rowData.row.original.status === "Cancelled") {
            return (
              <button className="text-white bg-red-400 rounded-lg px-2 hidden md:block">
                Cancelled
              </button>
            );
          } else {
            return (
              <button className="text-white bg-red-500 rounded-lg px-2 hidden md:block">
                Pending
              </button>
            );
          }
        },
      },
    ],
    []
  );

  const [data] = useState(tableData);

  return (
    <div className="w-full lg:w-[70%]">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default RecentOrderList;
