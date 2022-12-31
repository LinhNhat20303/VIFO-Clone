import React, { useState, useRef, useEffect,useReducer } from "react";
import {
  Card,
  Page,
  Navbar,
  Icon,
  List,
  ListInput,
  Button,
  Box,
  zmp,
} from "zmp-framework/react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { randomString } from "../../helper";

export default function CRUDcustomer() {
  const twoButtonsDialog = useRef(null);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const [customerList,setCustomerList] = useState([
    { id: 1, fullname: "Triệu Thị Trinh", dob: "20/03/2003", sex: "2" },
    { id: 2, fullname: "Nguyễn Phúc Vĩnh San", dob: "22/03/1994", sex: "1" },
    { id: 3, fullname: "Hoàng Phủ Ngọc Tường", dob: "22/09/1996", sex: "2" },
  ]);
    const newCustomer = {
      id:randomString(),
      fullname:"",
      dob:"",
      sex:''
    }
  
  const [newCustomerList, setNewCustomerList] = useState(customerList);

  function handleOnDeleteButton(id) {
    let newCustomerList = customerList.filter((customer) => customer.id != id);
    setNewCustomerList(newCustomerList);
  }
  useEffect(() => {
    twoButtonsDialog.current = zmp.dialog.create({
      title: "Thông tin cập nhật",
      closeByBackdropClick: true,
      destroyOnClose: true,
      content: "Cập Nhật Thành Công",
      on: {
        closed() {
          twoButtonsDialog.current = null;
        },
      },
      buttons: [
        {
          text: "Đóng",
          cssClass: "dialog-negative-action",
          close: true,
        },
      ],
    });
  }, []);
  function cloneHandleOnupdateButton(e) {
    const newList = [];
    customerList.map((item) => {
      const updateCustomer = zmp.form.convertToData(`#my-form${item.id}`);
      console.log(updateCustomer);
      const list = { ...customerList, ...updateCustomer };
      console.log(list);
      newList.push(list);
    });
    setNewCustomerList(newList);
     console.log("sucess");
    if (!twoButtonsDialog.current) {
      twoButtonsDialog.current = zmp.dialog.create({
        title: "Thông tin cập nhật",
        closeByBackdropClick: true,
        destroyOnClose: true,
        content: "Cập Nhật Thành Công",
        
        buttons: [
          {
            text: "Đóng",
            cssClass: "dialog-negative-action",
            close: true,
          },
        ],
      });
    }
    twoButtonsDialog.current.open();
   
    
  }

  function handleOnUpdateButton(name,id,e){
    console.log(name,id,e.target.value);
    let newListCustomer= [];
    newListCustomer = customerList.map((cus)=>{
      if(cus.id == id){
         cus[name] = e.target.value
      }
      return cus
    })
    console.log(newListCustomer)
  setCustomerList(newListCustomer)
  }

  function show(){
    console.log(customerList);
    
  }

  const handleFillForm = () => {
    customerList.map((item) => {
      
      //zmp.form.fillFromData('#my-form',customerList.map((item)=>{item}) );
      zmp.form.fillFromData(`#my-form${item.id}`, {
        id: item.id,
        fullname: item.fullname,
        dob: item.dob,
        sex: item.sex,
      });
    });
  };
  function handleOnAddButton(){
    let newCustomerList =[];
    newCustomerList = customerList
    newCustomerList.push(newCustomer);
    setCustomerList(newCustomerList)

    forceUpdate()
    
  }

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
          <Button
            className="filter-button "
            typeName="destructive"
            onClick={()=>handleOnAddButton()}
          >
            Thêm
          </Button>
        </Navbar>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={handleFillForm}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className="text-[14px] font-medium">Người Được Bảo Hiểm</span>
          </AccordionSummary>
          {customerList.map((cus, index) => {
            return (
              <AccordionDetails key={`customer${index}`}>
                <List
                  style={{ listStyle: "none" }}
                  className="m-0"
                  noHairlines
        //          id={`my-form${cus.id}`}
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
                    defaultValue={cus?.fullname}
                    onChange={(e)=>handleOnUpdateButton("fullname",cus.id,e)}
                  ></ListInput>
                  <ListInput
                    label="Tuổi của bạn"
                    type="text"
                    min={1}
                    placeholder="Nhập tuổi của bạn"
                    clearButton
                    required
                    defaultValue={cus?.dob}
                    name="dob"
                    validate
                  ></ListInput>
                  <ListInput
                    label="Giới Tính"
                    type="select"
                    name="sex"
                    validate
                  >
                    <option selected={cus?.sex == 1} value="1">Nam</option>
                    <option selected={cus?.sex == 2} value="2">Nữ</option>
                    <option selected={cus?.sex == 3} value="3">Khác</option>
                  </ListInput>
                </List>
                <div className="flex my-2 pl-[200px]">
                  <Button
                    className="updateButton mr-2 "
                    typeName="secondary"
                    // onClick={openDialogTwoButtons}
                    onClick={show}
                  >
                    Cập nhật
                  </Button>
                  <Button
                    className="filter-button "
                    typeName="destructive"
                    onClick={() => handleOnDeleteButton(cus.id)}
                  >
                    Xoá
                  </Button>
                </div>
              </AccordionDetails>
            );
          })}
        </Accordion>
        <Card>
          {customerList.map((item, index) => {
            return (
              <div>
                Tên:{item?.fullname}
                <br />
                Ngày Sinh:{item?.dob}
              </div>
            );
          })}
        </Card>
      </Card>
    </Page>
  );
}
