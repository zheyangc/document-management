import { DocumentTypeName } from "../constant/DocumentTypes";
import moment from "moment";

export const mapFetchDataToTableData = (document) => ({
  ...document,
  documentTypeName: DocumentTypeName[document.documentType],
  createTime: moment(document.createTime).format("YYYY/MM/DD HH:mm:ss"),
});
