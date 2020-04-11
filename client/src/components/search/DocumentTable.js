import React, { useEffect, useContext } from "react";
import { useTable, useFlexLayout } from "react-table";
import { getDocuments } from "../../api/Documents";
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
  const { documentState: state, documentDispatch } = useContext(
    DocumentContext
  );

  useEffect(() => {
    async function fetchData() {
      documentDispatch({ type: "FETCH_DOCUMENTS" });
      const res = await getDocuments();
      if (res.status) {
        documentDispatch({
          type: "FETCH_DOCUMENTS_SUCCEEDED",
          payload: res.data,
        });
      } else {
        documentDispatch({
          type: "FETCH_DOCUMENTS_FAILED",
          payload: res.error,
        });
      }
    }
    fetchData();
  }, []);

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

  if (state.fetchStatus === "FETCHED_SUCCEEDED") {
    return (<Table columns={columns} data={state.fetchResults.data} />);
  } else if (state.fetchStatus === "FETCHING"){
    return <h1>FETCHING</h1>;
  } else {
    return null;
  }
};
