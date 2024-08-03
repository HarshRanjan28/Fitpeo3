import { Column, useTable } from "react-table";

export interface dataProps {
  customer: string;
  OrderNo: number;
  amount: number;
  status: string;
}

const Table = ({
  columns,
  data,
}: {
  columns: Column<any>[];
  data: dataProps[];
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <div className="bg-[#202028] rounded-lg">
      <h1 className="text-3xl text-white p-3">Recent Orders</h1>
      <table
        {...getTableProps()}
        className="min-w-full border border-black rounded-lg"
      >
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-black">
                {headerGroup.headers.map((column) => (
                  <th
                    className={`${
                      column.Header === "Status" ? "hidden md:block" : ""
                    } border-b border-b-gray-800 p-3 text-left text-sm font-bold text-white bg-[#202028]`}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-900">
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="border-b border-b-gray-600 p-3 text-sm text-white"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
