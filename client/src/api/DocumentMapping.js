import { DocumentTypeName } from "../constant/DocumentTypes";
import moment from "moment";

export const mapFetchDataToTableData = (document) => ({
  ...document,
  documentTypeName: DocumentTypeName[document.documentType],
  createTime: moment(document.creatTime).format("YYYY/MM/DD hh:mm:ss"),
});
