import moment from "moment"
import { CONSTANT } from "../pages/utils/request"
import { callApi } from "./callApi"
import { callExtenalAPI } from "./callExternalAPI"
import sha256 from 'crypto-js/sha256';

 export  const verifyShCode = (sh_code) => {
        let endpoint =  "/public/shortlink"
        const formData = {
            key: sh_code
        }
        return callApi(endpoint, 'POST', formData, 'v1')
    }

export const getBHXHInfo= (social_id) =>{
let endpoint = 'https://socialbridgenetwork.info/api/social-insurance';

const unixTime = moment().unix()
// console.log(unixTime);
// console.log(social_id+unixTime+'VIFO123',CONSTANT.cypherKey);
const sign = sha256(social_id+unixTime+'VIFO123',CONSTANT.cypherKey).toString()
// console.log(sign);

const headers = {
    'X-Time-Request': unixTime,
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Accept-Language": "*",
    }
    
const body = {
    "social_id": social_id,
    "type": "BHYTHGD",
    "sign": sha256(social_id+unixTime+'VIFO123',CONSTANT.cypherKey).toString()

}
    return callExtenalAPI(endpoint, 'POST', body, headers)
    
}
