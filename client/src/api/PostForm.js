import axios from "axios";
import ConfigValues from "../constant/ConfigValues";

export const PostFormApi = async (req) => {
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
