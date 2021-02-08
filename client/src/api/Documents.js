import axios from "axios";
import { mapFetchDataToTableData } from "./DocumentMapping";

export const submitDocuments = async (req) => {
  try {
    let resp = await axios.post("/documents", req);
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
    let resp = await axios.delete("/documents", { data: req });
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

export const uploadDocument = async (req) => {
  try {
    let resp = await axios.post("/documents/upload", { data: req });
    return {
      status: true,
      data: resp.data,
    };
  } catch (err) {
    console.log(err);
    return {
      status: false,
      error: err,
    };
  }
};

export const getDocuments = async () => {
  try {
    let resp = await axios.get("/documents");
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
};
