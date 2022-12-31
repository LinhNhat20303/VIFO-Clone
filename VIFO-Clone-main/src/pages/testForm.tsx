import React, { useEffect, useReducer, useState } from "react";
import {
  Page,
  Card,
  Navbar,
  Icon,
  List,
  ListInput,
  Tabbar,
  Button,
  zmp,
} from "zmp-framework/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { formatCurrency } from "../helper";

export default function textForm() {
  //declare
  const [data, setData] = useState([]);

  const [newCustomer,setNewCustomer] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [listCustomer, setListCustomer] = useState([newCustomer]);
  const [customerTempArray,setCustomerTempArray]= useState([]);
  
  //function
  const handleOnSubmitForm2 = (e) => {
    e.preventDefault();
    
    
    const customerTemp = {
      name: zmp.form.convertToData("#my-form").fullname,
      age: zmp.form.convertToData("#my-form").age,
      sex: zmp.form.convertToData("#my-form").sex,
    };
   
    const temp = zmp.form.convertToData("#my-form")
    
    customerTempArray.push(temp)
    setCustomerTempArray(customerTempArray)
    setListCustomer(customerTempArray)
    console.log(customerTempArray);
    
  };
  useEffect(()=>{
    //console.log(listCustomer);
    setListCustomer(listCustomer)
  },listCustomer)

  //const [newCustomer,setNewCustomer]= useState()
  // const handleOnAddButton = (e) =>{
  //   e.preventDefault();
  //   setData(zmp.form.convertToData('#my-form'))
  // }


  
  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    // console.log(zmp.form.convertToData('#my-form'));
    listCustomer.push(newCustomer);

    setListCustomer(listCustomer);
  };

  return (
    <Page>
      <Card className="bg-white py-0 mb-[30px]">
        <Navbar>
          <Icon
            className="text-black"
            zmp="zi-chevron-left-header"
            size={"22px"}
          />
          <span className="text-[18px] pl-[8px] font-medium">
            Chi Tiết Đơn Hàng
          </span>
        </Navbar>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <span className="text-[14px] font-medium">
            Thông Tin Những Chuyến Đi
          </span>
        </AccordionSummary>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className="text-[14px] font-medium">Người Được Bảo Hiểm</span>
          </AccordionSummary>
          <AccordionDetails>
            <List
              style={{ listStyle: "none" }}
              form
              id="my-form"
              className="m-0"
              onSubmit={handleOnSubmitForm2}
              noHairlines
            >
              <ListInput
                label="Tên Đầy Đủ"
                type="text"
                placeholder="Nhập họ và tên của bạn"
                clearButton
                info="Tên của bạn"
                name="fullname"
                pattern="/[^a-z A-Z_\x{00C0}-\x{00FF}\x{1EA0}-\x{1EFF}]/u"
                required
                errorMessage="Invalid"
                validate
              ></ListInput>
              <ListInput
                label="Tuổi của bạn"
                type="number"
                min={1}
                placeholder="Nhập tuổi của bạn"
                clearButton
                required
                name="age"
                validate
              ></ListInput>
              <ListInput label="Giới Tính" type="select" name="sex" validate>
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
                <option value="2">Khác</option>
              </ListInput>
              <div className="button flex mb-2 ">
                <Button type="submit" className="addButton ">
                  Thêm người được bảo hiểm
                </Button>
              </div>
            </List>
          </AccordionDetails>
        </Accordion>
        {listCustomer.map((cus, index) => {
          return (
            <Accordion key={`${index}`}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span className="text-[14px] font-medium">
                  Người Được Bảo Hiểm {index + 1}
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  style={{ listStyle: "none" }}
                  form
                  id="my-form"
                  className="m-0"
                  onSubmit={handleOnSubmitForm}
                  noHairlines
                  
                >
                  <ListInput
                    label="Tên Đầy Đủ"
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    clearButton
                    info="Tên của bạn"
                    name="fullname"
                    pattern="/[^a-z A-Z_\x{00C0}-\x{00FF}\x{1EA0}-\x{1EFF}]/u"
                    required
                    errorMessage="Invalid"
                    validate
                    value={cus.fullname}
                  ></ListInput>
                  <ListInput
                    label="Tuổi của bạn"
                    type="number"
                    min={1}
                    placeholder="Nhập tuổi của bạn"
                    clearButton
                    required
                    name="age"
                    validate
                    value={cus.age}
                  ></ListInput>
                  <ListInput
                    label="Giới Tính"
                    type="select"
                    name="sex"
                    validate
                    value={cus.sex}
                  >
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                    <option value="2">Khác</option>
                  </ListInput>
                  {/* <div className="button flex mb-2 ">
  <Button type="submit" className="addButton ">
     Thêm người được bảo hiểm 
   </Button>
 </div> */}
                </List>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Card>
      <Button onClick={()=>zmp.views.main.router.navigate("/CRUD/CRUDcustomer")}>Danh Sách Khách Hàng</Button>
      <Tabbar className="h-[70px] px-4" bottom>
        <div className="text-center">
          <span className="text-[12px]">Tổng Cộng</span>
          <h1 className="text-[22px] font-bold text-[#F5832F]">
            {formatCurrency(365000)}đ
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
