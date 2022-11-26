import axios from "axios";
import { CONSTANT } from "../pages/utils/request";

export const callExtenalAPI = async (endpoint, method, body, headers) => {
  const getRspData = async () => {
    switch (method) {
      case "POST":
        const postpromise = await axios.post(endpoint, body, {
          headers: headers,
        });
        return postpromise;
        break;
     default:
             const promise = await axios.get(endpoint, body, {
                headers: headers,
              });
              return promise;
              break;
  }
}
let rsp = getRspData().then((response) => response.data)
return rsp

  // try {
  //   let promise = null;
  //   switch (method) {
  //     case "POST":
  //       promise = await axios.post(`${endpoint}`, body, {
  //         headers: headers,
  //       });
  //       return promise;
  //       break;
  //     case "PUT":
  //       promise = await axios.put(`${endpoint}`, body, {
  //         headers: headers,
  //       });
  //       return promise;
  //       break;
  //     default:
  //       promise = await axios.get(`${endpoint}`, { headers: headers });
  //       return promise;
  //   }
  // } 
  // try{
  //   var option = {
  //     method: method, // or 'PUT'
  //     headers: headers,
  //     body: JSON.stringify(body),
  //   }
  //   const rsp = await fetch(endpoint,option)
  //   return rsp;
  // // .then((response) => {return response.json()})
  // // .then((data) => {
  // //   console.log('Success:', data);
  // //   return data;
  // // })
  // // .catch((error) => {
  // //   console.error('Error:', error);
  // // });
  // }
  // catch (error) {
  //   console.log(error);
  // }
  const baseURL = endpoint;
  // let headers = headers
// api Link Protocol: url =  {baseUrl + apiVersion + endpoint},

//5420836627

};
