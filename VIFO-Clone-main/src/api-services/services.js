import moment from "moment";
import { CONSTANT } from "../pages/utils/request";
import { callApi } from "./callApi";
import { callExtenalAPI, callExtenalAPIFromToken } from "./callExternalAPI";

export const verifyShCode = (sh_code) => {
  let endpoint = "/public/shortlink";
  const formData = {
    key: sh_code,
  };
  return callApi(endpoint, "POST", formData, "v1");
};

export const callAPIFromToken = () => {
  let endpoint = "/clients/web/admin/login";

  const header = {
    Accept: " application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "*",
  };

  const body = {
    username: "Nhat_Linh_test",
    password: "0854062409",
  };
  return callApi(endpoint, "POST", body, "v1", header);
};

export const CREATE_A_SUBMIT_ORDER = (body, token) => {
  let endpoint = "https://sapi.vifo.vn/v2/insurance";

  const header = {
    Accept: " application/json",
    "Content-Type": " application/json; charset=utf-8",
    Authorization: "Bearer " + token,
    //   Authorization:
    //     " Bearer ",
  };
  return callExtenalAPIFromToken(endpoint, "POST", body, header);
};

//LOAD FAMILIES API
export const loadFamilies = (token) => {
  const endpoint =
    "/product/families?searchJoin=and&search=is_active:1;site_id:2&searchFields=site_id:=;is_active:=&site_id=2";
  return callApi(endpoint, "GET", {}, "v1", null, token);
};
export const loadProductFamilyById = (familyId, token) => {
  const endpoint = `products?&searchJoin=and&search=site_id:2;is_active:1&searchFields=site_id:=;is_active:=&status=true&product_family_id=${familyId}&dir=asc&order=price&site_id=2`;

  return callApi(endpoint, "GET", null, "v1", null, token);
};
export const getProductBySlug = (params, token) => {
  let endpoint = `/product/detail-product/vi/${params.slug}?include=prices.discounts&site_id=2`;
  return callApi(endpoint, "GET", {}, "v1", null, token);
};
