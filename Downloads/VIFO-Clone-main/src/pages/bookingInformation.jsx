import React, { useEffect, useReducer, useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Icon,
  Link,
  List,
  ListInput,
  Navbar,
  Page,
  Tab,
  Tabbar,
  Tabs,
  useStore,
} from "zmp-framework/react";
import dateFormat from "dateformat";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment, { now } from "moment";
import { CONVERT_TO_DATE, formatCurrency, randomString } from "../helper";
import {
  callAPIFromToken,
  CREATE_A_SUBMIT_ORDER,
  loadFamilies,
} from "../api-services/services";

export default function bookingInformation() {
  const customerData = useStore("getCustomerData");
  const [showCustomerData, setShowCustomerData] = useState([{}]);
  // const token = useStore("getApiToken");
  const token = localStorage.getItem("token");

  let [order, setOrder] = useState({
    product_code: "TNDSBSMN01210101",
    fullname: "",
    phone: "",
    email: "",
    address: "",
    no_plate: "",
    chassis_no: "",
    engine_no: "",
    bike_type: 2,
    start_date: "",
    year: "1",
    end_date: "",
    final_amount: 66000,
    //options: [],
    attachment_url_files: null,
    ward: "",
    district: "Quận 12",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
  });

  useEffect(() => {
    async function fetchData() {
      const familyOrder = await loadFamilies(token);
    }
    fetchData();
  }, []);
  function handleSubmitOrder() {
    console.log(order);

    //VALIDTAE
    const newProduct = zmp.form.convertToData("#my-form");
    let isValid = false;
    if (
      !newProduct.phone ||
      !newProduct.name ||
      !newProduct.email ||
      !newProduct.address ||
      !newProduct.no_plate ||
      !newProduct.bike_type ||
      !newProduct.city ||
      !newProduct.start_date ||
      !newProduct.end_date ||
      !newProduct.chassis_no ||
      !newProduct.engine_no
    ) {
      isValid = false;
    } else {
      isValid = true;
    }
    try {
      if (isValid) {
        //CREATE A SUBMIT
        // try {
        //   const postDataToApi = async (body) => {
        //     let response = await CREATE_A_SUBMIT_ORDER(body, token);
        //     console.log(response);
        //   };
        //   postDataToApi(order);
        // } catch (err) {
        //   console.err(err);
        // }
      }
    } catch (error) {}
  }

  function handleOnChange(field, event) {
    console.log(field, moment(event).format("YYYY-MM-DD"));
    if (field == "start_date") {
      console.log(event);
      order[field] = moment(event).format("YYYY-MM-DD");
      order.end_date = moment(event)
        .add(order.year, "years")
        .format("YYYY-MM-DD");
    } else order[field] = event.target.value;
    // console.log(order);
    setOrder(order);
    forceUpdate();
  }
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  function handleOnBuyClick() {
    setShowCustomerData(customerData);
  }
  // useEffect(() => {
  //   // let response = services.verifyShCode("SsSYRJ0LZeBw")
  //   try {
  //     const getdata = async () => {
  //       let response = await tokenExtenal(order);
  //       console.log(response);
  //     };
  //     getdata();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <Page>
      <Card className="bg-white py-0 ">
        <Navbar>
          <Icon
            className="text-black"
            zmp="zi-chevron-left-header"
            size={"22px"}
          />
          <span className="text-[18px] pl-[8px] pr-[50px] font-medium">
            Thông Tin Khách Hàng
          </span>
        </Navbar>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className="text-[18px] font-medium">Người Được Bảo Hiểm</span>
          </AccordionSummary>

          <AccordionDetails>
            <List
              id="my-form"
              style={{ listStyle: "none" }}
              className="m-0"
              noHairlines
            >
              <ListInput
                label="Số Điện Thoại"
                onChange={(e) => handleOnChange("phone", e)}
                type="text"
                placeholder="Nhập số điện thoại của bạn"
                clearButton
                info="Số Điện thoại "
                pattern="^[0-9]{10}"
                maxlength={10}
                required
                name="phone"
                errorMessage="Invalid"
                validate
              ></ListInput>
              <ListInput
                label="Họ Và Tên"
                onChange={(e) => handleOnChange("fullname", e)}
                type="text"
                placeholder="Nhập họ và tên"
                name="name"
                clearButton
                info="Họ và Tên"
                pattern="/[^a-z A-Z_\x{00C0}-\x{00FF}\x{1EA0}-\x{1EFF}]/u"
                required
                errorMessage="Invalid"
                validate
              ></ListInput>
              <ListInput
                label="Email"
                name="email"
                type="text"
                onChange={(e) => handleOnChange("email", e)}
                placeholder="Email"
                clearButton
                required
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                validate
              ></ListInput>
              <ListInput
                label="Địa Chỉ"
                name="address"
                type="text"
                onChange={(e) => handleOnChange("address", e)}
                placeholder="địa chỉ"
                clearButton
                required
                validate
              ></ListInput>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="m-0"
            id="panel1a-header"
          >
            <span className="text-[18px] font-medium">
              Thông tin xe được BH{" "}
            </span>
          </AccordionSummary>
          <Tabbar className="mb-2">
            <Link tabLink="#tab-1" tabLinkActive>
              Biển kiểm soát
            </Link>
            <Link tabLink="#tab-2" className="py-0">
              Số Khung/ Máy
            </Link>
          </Tabbar>
          <Tabs>
            <Tab id="tab-1" className="page-content p-0 " tabActive>
              <AccordionDetails>
                <List
                  id="my-form"
                  style={{ listStyle: "none" }}
                  className="m-0"
                  noHairlines
                >
                  <ListInput
                    label="Biển kiểm soát"
                    onChange={(e) => handleOnChange("no_plate", e)}
                    type="text"
                    name="no_plate"
                    placeholder="Nhập biển kiểm soát"
                    clearButton
                    info="Biển kiểm soát"
                    pattern="/[^a-z A-Z_\x{00C0}-\x{00FF}\x{1EA0}-\x{1EFF}]/u"
                    required
                    errorMessage="Invalid"
                    validate
                  ></ListInput>

                  <ListInput
                    label="Loại xe"
                    type="select"
                    name="bike_type"
                    validate
                    onChange={(e) => handleOnChange("bike_type", e)}
                  >
                    <option value="1">Xe trên 50cc</option>
                    <option value="2">Xe dưới 50 cc</option>
                    <option value="3">Xe trên 200cc</option>
                  </ListInput>

                  <ListInput
                    label="Tại"
                    type="text"
                    min={1}
                    name="city"
                    placeholder="Chọn Tỉnh/ Thành Phố"
                    onChange={(e) => handleOnChange("city", e)}
                    clearButton
                    required
                    validate
                  ></ListInput>
                  <ListInput
                    label="Ngày Bắt Đầu"
                    placeholder="dd/mm/yyy"
                    name="start_date"
                    type="datepicker"
                    onChange={(e) => handleOnChange("start_date", e)}
                    min={1}
                    clearButton
                    required
                    validate
                  ></ListInput>
                  <ListInput label="Năm" type="select" validate>
                    <option value="1">1 năm</option>
                    <option value="2">2 năm</option>
                    <option value="3">3 năm</option>
                    <option value="4">4 năm</option>
                    <option value="5">5 năm</option>
                    <option value="6">6 năm</option>
                  </ListInput>
                  <ListInput
                    label="Ngày Kết Thúc"
                    placeholder="dd/mm/yyy"
                    type="datepicker"
                    name="end_date"
                    onChange={(e) => handleOnChange("end_date", e)}
                    clearButton
                    required
                    validate
                  ></ListInput>
                </List>
              </AccordionDetails>
            </Tab>
            <Tab id="tab-2" className="page-content p-0 ">
              <AccordionDetails>
                <List style={{ listStyle: "none" }} className="m-0" noHairlines>
                  <ListInput
                    label="Số Khung"
                    type="text"
                    onChange={(e) => handleOnChange("chassis_no", e)}
                    placeholder="Nhập Số Khung"
                    clearButton
                    info="Số Khung"
                    name="chassis_no"
                    pattern="/[^a-z A-Z_\x{00C0}-\x{00FF}\x{1EA0}-\x{1EFF}]/u"
                    required
                    errorMessage="Invalid"
                    validate
                  >
                    {" "}
                  </ListInput>
                  <ListInput
                    label="Số Máy"
                    type="text"
                    placeholder="Nhập Số Máy"
                    onChange={(e) => handleOnChange("engine_no", e)}
                    clearButton
                    info="Số Máy"
                    name="engine_no"
                    pattern="/[^a-z A-Z_\x{00C0}-\x{00FF}\x{1EA0}-\x{1EFF}]/u"
                    required
                    errorMessage="Invalid"
                    validate
                  ></ListInput>
                  <ListInput
                    label="Loại xe"
                    type="select"
                    name="bike_type"
                    validate
                    onChange={(e) => handleOnChange("bike_type", e)}
                  >
                    <option value="1">Xe trên 50cc</option>
                    <option value="2">Xe dưới 50 cc</option>
                    <option value="3">Xe trên 200cc</option>
                  </ListInput>
                  <ListInput
                    label="Tại"
                    type="text"
                    name="city"
                    pattern=""
                    min={1}
                    placeholder="Chọn Tỉnh/ Thành Phố"
                    onChange={(e) => handleOnChange("city", e)}
                    clearButton
                    required
                    validate
                  ></ListInput>
                  <DatePicker
                    label="Ngày Bắt Đầu"
                    name="start_date"
                    placeholder="dd/mm/yyy"
                    onChange={(date) => handleOnChange("start_date", date)}
                    clearButton
                    required
                    validate
                  ></DatePicker>
                  <ListInput
                    label="Năm"
                    type="select"
                    validate
                    onChange={(e) => handleOnChange("", e)}
                  >
                    <option value="1">1 năm</option>
                    <option value="2">2 năm</option>
                    <option value="3">3 năm</option>
                    <option value="4">4 năm</option>
                    <option value="5">5 năm</option>
                    <option value="6">6 năm</option>
                  </ListInput>

                  <ListInput
                    type="text"
                    label="Ngày Kết Thúc"
                    name="end_date"
                    value={order.end_date}
                  ></ListInput>
                </List>
              </AccordionDetails>
            </Tab>
          </Tabs>
        </Accordion>
      </Card>
      <Tabbar className="h-[70px] px-4" bottom>
        <div className="text-center">
          <span className="text-[12px]">Tổng Cộng</span>
          <h1 className="text-[22px] font-bold text-[#F5832F]">
            {formatCurrency(order.final_amount)}đ
          </h1>
        </div>
        <div className="button p-0">
          <Button
            onClick={() => {
              handleSubmitOrder();
            }}
            className="w-173px "
            responsive
            typeName="tertiary"
          >
            Mua Ngay
          </Button>
        </div>
      </Tabbar>
    </Page>
  );
}
