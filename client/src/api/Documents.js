import axios from "axios";
import ConfigValues from "../constant/ConfigValues";
import {mapFetchDataToTableData} from "./DocumentMapping";

export const submitDocuments = async (req) => {
  try {
    let resp = await axios.post(
      ConfigValues.DOCUMENT_SERVICE_PATH + ":3001/documents",
      req
    );
    return {
      status: true,
      data: resp.data,
    };
  } catch (err) {
    return {
      status: false,
      error: err,
    };
  }
};

export const deleteDocuments = async (req) => {
  try {
    let resp = await axios.delete(
      ConfigValues.DOCUMENT_SERVICE_PATH + ":3001/documents",
      req
    );
    return {
      status: true,
      data: resp.data,
    };
  } catch (err) {
    return {
      status: false,
      error: err,
    };
  }
};

export const getDocuments = async() => {
  try {
    let resp = await axios.get(
      ConfigValues.DOCUMENT_SERVICE_PATH + ":3001/documents",
    );
    return {
      status: true,
      data: resp.data.documents.map(mapFetchDataToTableData),
    };
  } catch (err) {
    return {
      status: false,
      error: err,
    };
  }
}
