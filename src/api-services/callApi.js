import axios from "axios";
import { CONSTANT } from "../pages/utils/request";

export const callApi = async (endpoint, method, body, apiVersion) => {
  const baseURL = `${CONSTANT.baseUrl}${apiVersion}`;
    console.log(baseURL);
  let headers = {
    "Distributor-App": CONSTANT.groupCode,
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Accept-Language": "*",
  //  Authorization: token ? "Bearer " + token : "",
  };
  // api Link Protocol: url =  {baseUrl + apiVersion + endpoint},
  
//5420836627
  
  try {
    switch (method) {
      case "POST":
        const postpromise = await axios.post(`${baseURL}${endpoint}`, body, {
          headers: headers,
        });
        console.log(promise);
        return postpromise;
        break;
     default:
             const promise = await axios.get(`${baseURL}${endpoint}`, body, {
                headers: headers,
              });
              return promise;
              break;
    }

    /// same as others
  } catch (error) {
    console.log(error);
  }
};