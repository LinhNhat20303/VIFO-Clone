import axios from "axios";
import { CONSTANT } from "../pages/utils/request";

export const callApi = async function (
  endpoint,
  method = "GET",
  body = null,
  version = "",
  header = null,
  token = null,
  noCheckToken = false
) {
  let API_URL = CONSTANT.baseUrl + (version ? version : CONSTANT.apiVersion);
  if (endpoint.charAt(0) == "/") {
    endpoint = endpoint.substring(1);
  }

  // if (!token && !noCheckToken) {
  //   token = await getTokenFromStorageData();
  // }

  let headers = {
    "Distributor-App": CONSTANT.groupCode,
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Accept-Language": "*",
    Authorization: token ? "Bearer " + token : "",
  };

  const callApiData = async () => {
    switch (method) {
      case "POST":
        const postPromise = await axios.post(`${API_URL}/${endpoint}`, body, {
          headers: headers,
        });
        // using .then, create a new promise which extracts the data
        // return it
        return postPromise;
        break;
      case "PUT":
        const putPromise = await axios.put(`${API_URL}/${endpoint}`, body, {
          headers: headers,
        });
        // using .then, create a new promise which extracts the data
        // return it
        return putPromise;
        break;
      default:
        const promise = await axios.get(`${API_URL}/${endpoint}`, {
          headers: headers,
        });
        // using .then, create a new promise which extracts the data

        // return it
        return promise;
    }
  };

  let rsp = callApiData().then((response) => response.data);
  return rsp;
};
//hello 112
