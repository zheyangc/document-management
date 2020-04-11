import React, { useContext, useEffect } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { DocumentContext } from "../../contexts/DocumentContext";
import { DefaultColumnFilter, SelectColumnFilter } from "./TableFilters";
import { TablePagination } from "./TablePagination";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const tableState = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
    },
    useFilters,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
  } = tableState;

  // Render the UI for your table
  return (
    <React.Fragment>
      <TablePagination tableState={tableState}/>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export const DocumentTable = () => {
  const { documentFetchState, documentTableDispatch } = useContext(
    DocumentContext
  );
  const data = documentFetchState.fetchResults.data;

  const columns = React.useMemo(
    () => [
      {
        Header: "类型",
        accessor: "documentTypeName", // accessor is the "key" in the data
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "编号",
        accessor: "documentNumber",
        filter: "equals",
      },
      {
        Header: "取号人",
        accessor: "userName",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "创建时间",
        accessor: "createTime",
        disableFilters: true,
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};
