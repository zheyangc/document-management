import React from "react";
import { getDocuments } from "../../api/Documents";
import { Table } from "./Table";

export const Search = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "类型",
        accessor: "documentType", // accessor is the "key" in the data
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

  const getData = async () => {
    let res = await getDocuments();
    console.log(res.data)
    return res.data;
  };

  return (
      <Table columns={columns} data={getData()}/>
  );
};
