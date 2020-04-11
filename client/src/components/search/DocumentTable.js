import React, { useContext } from "react";
import { useTable } from "react-table";
import { DocumentContext } from "../../contexts/DocumentContext";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const DocumentTable = () => {
  const { documentFetchState: state } = useContext(
    DocumentContext
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "类型",
        accessor: "documentTypeName", // accessor is the "key" in the data
      },
      {
        Header: "编号",
        accessor: "documentNumber",
      },
      {
        Header: "取号人",
        accessor: "userName",
      },
      {
        Header: "创建时间",
        accessor: "createTime",
      },
    ],
    []
  );

  return (<Table columns={columns} data={state.fetchResults.data} />);
};
