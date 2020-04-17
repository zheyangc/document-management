import React, { useContext } from 'react';
import { CSVLink } from "react-csv";
import { DocumentContext } from '../../contexts/DocumentContext';
import { DocumentTypeName } from '../../constant/DocumentTypes';
import { Button } from 'react-bootstrap';

const headers = [
  { label: "类型", key: "documentType" },
  { label: "编号", key: "documentNumber" },
  { label: "取号人", key: "userName" },
  { label: "创建时间", key: "createTime" },
];

export const DownloadTable = () => {
  const {documentFetchState} = useContext(DocumentContext);
  const fetchedData = documentFetchState.fetchResults.data;
  const data = fetchedData.map(item => ({
    documentType: DocumentTypeName[item.documentType],
    documentNumber: item.documentNumber,
    userName: item.userName,
    createTime: item.createTime
  }))
  
  return (
    <CSVLink data={data} headers={headers} filename={"documents.csv"}>
      <Button variant='light'>
        下载表格
      </Button>
    </CSVLink>
  );
}