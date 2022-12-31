import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import {
  Page,
  Card,
  Icon,
  List,
  ListInput,
  DatePicker,
  Tab,
  Tabbar,
  Link,
  Tabs,
  Button,
  Checkbox,
  Box,
} from "zmp-framework/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Radio } from "antd";
import { formatCurrency } from "../helper";
import moment from "moment";

export default function carForm() {
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [year, setYear] = useState(1);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  function handleChangeStartDate(date) {
    setStartDate(moment(date).format("YYYY-MM-DD"));
  }

  function handleOnchange(event) {
    setYear(event.target.value);
  }

  useEffect(() => {
    setEndDate(moment(startDate).add(year, "years").format("YYYY-MM-DD")); 
     
  }, [startDate, year ]);
  const handleOnCheckBox = (event) =>{
    const checked = event.target.checked;
     const element =document.getElementById("checkbox")
    //console.log(event.target.checked);
    if(checked){
        element.style.display = "block"
    }
    else  element.style.display = "none"
  }

  return (
    <Page>
      <Card className="bg-white py-0 ">
        <div className="px-[16px] py-[16px]  ">
          <div className="headerInput flex items-center pb-[16px]">
            <Icon
              className="text-black"
              zmp="zi-chevron-left-header"
              size={"22px"}
            />
            <span className="text-[18px] pl-[8px] font-medium">
              Vừa chở người vừa chở hàng
            </span>
          </div>
          <div className="subHeader">
            <span> Tải lên 1 trong 2 loại giấy tờ</span>
            <div className=" pt-[16px] flex">
              <div className="w-[50%] rounded-lg h-[100px] relative bg-[#F9F9FE]">
                <Icon
                  className="text-[#778D9E] absolute top-[18px] left-[55px]"
                  zmp="zi-add-photo"
                  size={"40px"}
                />
                <span className="text-[#778D9E] text-[12px] absolute bottom-[18px] left-[15.5px]">
                  {" "}
                  CMND/CCCD/Passport
                </span>
              </div>
              <div className="w-[50%] ml-[16px] rounded-lg h-[100px] relative bg-[#F9F9FE]">
                <Icon
                  className="text-[#778D9E] absolute top-[18px] left-[55px]"
                  zmp="zi-add-photo"
                  size={"40px"}
                />
                <span className="text-[#778D9E] text-[12px] absolute bottom-[18px] left-[41px]">
                  {" "}
                  Giấy Khai Sinh
                </span>
              </div>
            </div>
          </div>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className="text-[18px] font-medium">Thông Tin Chủ Xe</span>
          </AccordionSummary>

          <AccordionDetails>
            <List
              style={{ listStyle: "none" }}
              className="m-0"
              noHairlines
              id="over-form"
            >
              <ul>
                <ListInput
                  label="Số Điện Thoại"
                  //onChange={(e) => handleOnChange("phone", e)}
                  type="text"
                  placeholder="Nhập số điện thoại "
                  clearButton
                  //info="Số Điện thoại "
                  pattern="^[0-9]{10}"
                  maxlength={10}
                  required
                  name="phone"
                  errorMessage="Invalid"
                  validate
                ></ListInput>
                <ListInput
                  label="Họ Và Tên"
                  //onChange={(e) => handleOnChange("fullname", e)}
                  type="text"
                  placeholder="Theo giấy đăng ký xe"
                  name="name"
                  clearButton
                  // info="Họ và Tên"
                  // pattern="^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$"
                  required
                  errorMessage="Invalid"
                  validate
                ></ListInput>
                <ListInput
                  label="Email"
                  name="email"
                  type="text"
                  // onChange={(e) => handleOnChange("email", e)}
                  placeholder="Nhập email"
                  clearButton
                  required
                  pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                  validate
                ></ListInput>
                <ListInput
                  label="Địa Chỉ"
                  name="address"
                  type="text"
                  //onChange={(e) => handleOnChange("address", e)}
                  placeholder="Nhập địa chỉ"
                  clearButton
                  required
                  validate
                ></ListInput>
                <DatePicker
                  dateFormat="dd/mm/yyyy"
                  label="Ngày hiệu lực "
                  name="start_date"
                  placeholder="dd/mm/yyy"
                  onChange={(date) => handleChangeStartDate(date)}
                  defaultValue={moment(startDate).toDate()}
                  clearButton
                  required
                  validate
                ></DatePicker>
                <ListInput
                  onInputNotEmpty={(e) => handleOnchange(e)}
                  label="Năm"
                  type="select"
                  validate
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
                  //   onChange={(date) => handleOnChange("end_date", date)}
                  value={moment(endDate).format("DD/MM/YYYY")}
                ></ListInput>
                <ListInput
                  label="Mã liên"
                  name="ward"
                  type="text"
                  // onChange={(e) => handleOnChange("address", e)}
                  placeholder="Nhập mã nếu có "
                  clearButton
                  required
                ></ListInput>
                <Checkbox onChange={(e)=>handleOnCheckBox(e)}>
                  <span className="pl-[8px] text-[15px]">Xuất hoá đơn</span>
                </Checkbox>
              </ul>
              <ul id="checkbox" style={{display:"none"}} >
              <ListInput label="Mã số thuế" placeholder="Nhập mã số thuế" required clearButton validate>                </ListInput>
                <ListInput label="Tên công ty " placeholder="Nhập tên công ty" required clearButton validate>
                </ListInput>
                <ListInput label="Địa chỉ công ty " placeholder="Nhập địa chỉ công ty " required clearButton validate>
                </ListInput>
              </ul>
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
                    // onChange={(e) => handleOnChange("no_plate", e)}
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
                </List>
              </AccordionDetails>
            </Tab>
            <Tab id="tab-2" className="page-content p-0 ">
              <AccordionDetails>
                <List style={{ listStyle: "none" }} className="m-0" noHairlines>
                  <ListInput
                    label="Số Khung"
                    type="text"
                    // onChange={(e) => handleOnChange("chassis_no", e)}
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
                    // onChange={(e) => handleOnChange("engine_no", e)}
                    clearButton
                    info="Số Máy"
                    name="engine_no"
                    pattern="/[^a-z A-Z_\x{00C0}-\x{00FF}\x{1EA0}-\x{1EFF}]/u"
                    required
                    errorMessage="Invalid"
                    validate
                  ></ListInput>
                </List>
              </AccordionDetails>
            </Tab>
          </Tabs>
          <List
            style={{ listStyle: "none" }}
            className="m-0 px-[16px]"
            noHairlines
            id="over-form"
          >
            <ListInput
              label="Tại"
              type="text"
              min={1}
              name="city"
              placeholder="Chọn Tỉnh/ Thành Phố"
              // onChange={(e) => handleOnChange("city", e)}
              clearButton
              required
              validate
            ></ListInput>
            <ListInput
              label="Hãng xe"
              type="text"
              name="brand"
              placeholder="Chọn hãng xe"
              // onChange={(e) => handleOnChange("city", e)}
              clearButton
            ></ListInput>

            <ListInput label=" Mục đích sử dụng ">
              <option value="1"> XE KHÔNG KINH DOANH</option>
            </ListInput>
            <ListInput type="select" label="Số chỗ">
              <option value="4">4</option>
              <option value="5">5</option>
            </ListInput>
          </List>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="m-0"
            id="panel1a-header"
          >
            <span className="text-[18px] font-medium">Điều khoản bổ sung</span>
          </AccordionSummary>
        </Accordion>
        <Checkbox className=" py-[16px] px-[16px]">
          <span className="pl-[8px] text-[15px]">
            Tôi cam đoan rằng tất cả những lời khai trên là đúng và đã rõ
            <span className="pl-[2px] text-[15px] text-[#f5832f]">
              quy tắc sản phẩm
            </span>
          </span>
        </Checkbox>
      </Card>
      <Tabbar className="h-[70px] px-4" bottom>
        <div className="text-center">
          <span className="text-[12px]">Tổng Cộng</span>
          <h1 className="text-[22px] font-bold text-[#F5832F]">
            {formatCurrency(417000)}đ
          </h1>
        </div>
        <div className="button p-0">
          <Button className="w-173px " responsive typeName="tertiary">
            Mua Ngay
          </Button>
        </div>
      </Tabbar>
    </Page>
  );
}
