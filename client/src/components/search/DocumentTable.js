import React, { useContext } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGroupBy,
  useExpanded,
  useRowSelect,
} from "react-table";
import { DocumentContext } from "../../contexts/DocumentContext";
import { DefaultColumnFilter, SelectColumnFilter } from "./TableFilters";
import { TablePagination } from "./TablePagination";
import { TableSelection } from "./TableSelection";
import { DeleteResult } from "./DeleteResult";
import { DeleteRows } from "./DeleteRows";
import { Table as BSTable } from "react-bootstrap";
import { TableContextProvider } from "../../contexts/TableContext";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const tableState = useTable(
    {
      columns,
      data,
      defaultColumn: {
        Filter: DefaultColumnFilter,
      },
      disableMultiSort: true,
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    // Here we will use a plugin to add our selection column
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            // Make this column a groupByBoundary. This ensures that groupBy columns
            // are placed after it
            groupByBoundary: true,
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      sortBy,
      groupBy,
      expanded,
      filters,
      selectedRowIds,
    },
  } = tableState;

  // Render the UI for your table
  return (
    <TableContextProvider>
      <DeleteRows />
      <TablePagination tableState={tableState} />
      <TableSelection tableState={tableState} />
      <DeleteResult />
      <BSTable responsive striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <span {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {column.isSorted ? (column.isSortedDesc ? " ▽" : " △") : ""}
                  </span>
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
      </BSTable>
    </TableContextProvider>
  );
};

export const DocumentTable = () => {
  const { documentFetchState } = useContext(DocumentContext);
  const data = React.useMemo(() => documentFetchState.fetchResults.data, []);

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
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};
