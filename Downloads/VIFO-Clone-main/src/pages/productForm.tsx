import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useReducer, useRef, useState } from "react";
import {
  Page,
  Icon,
  Card,
  List,
  ListInput,
  Button,
  DatePicker,
  Box,
  Tabbar,
  zmp,
  Tab,
} from "zmp-framework/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Radio, Tabs } from "antd";
import moment from "moment";
import {
  CREATE_A_SUBMIT_ORDER,
  getProductBySlug,
} from "../api-services/services";

export default function productForm({ zmproute }) {
  const queries = zmproute.query;
  const token = localStorage.getItem("token");
  const toast = useRef(null);
  const topToast = useRef(null);
  let [productCoverages, setProductCoverages] = useState({});
  const [price, setPrice] = useState(66000);
  const bikeTypeAvailable = [];
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const onPageBeforeOut = () => {
    if (toast.current) {
      toast.current.close();
      toast.current.destroy();
    }
  };
  let [order, setOrder] = useState({
    product_code: queries.product_code,
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
    async function fetchApi() {
      let rps = await getProductBySlug({ slug: queries.slug }, token);
      rps.data.coverages.map((coverage) => {
        productCoverages[
          coverage.coverage_value.translations.vi.label
            ?.toLowerCase()
            .replaceAll(" ", "_")
            .replaceAll("/", "_")
        ] = coverage.coverage_value.translations.vi.value;
      });
      setProductCoverages(productCoverages);
     
    }
    fetchApi();
    //console.log(queries.product_code);
    
  }, []);

  function handleOnChange(field, event) {

    if (field=="bike_type" && !productCoverages[event.target.value]) {
      toast.current = zmp.toast.create({
        text: "Loại xe không hợp lệ",
        position: "bottom",
        closeTimeout: 2000,
      });

      // Mở
      toast.current.open();
    }
   
      if (field == "start_date") {
        order[field] = moment(event).format("YYYY-MM-DD");
        order.end_date = moment(event)
          .add(order.year, "years")
          .format("YYYY-MM-DD");
      } else {
        if( event.target.value == "under_50cc"){
          order.final_amount = "60600"
        }
        if( event.target.value == "over_50cc"){
          order.final_amount = "66000"
        }
        else
        order[field] = event.target.value;
       
      }
   setOrder(order);
      forceUpdate();
    
  }
  function handleFillForm(e) {
    e.preventDefault();
    zmp.form.fillFromData("#over-form", {
      phone: "0854062409",
      name: "Phạm Nhật Linh",
      email: "phamnhatlinh20303@gmail.com",
      start_date: "20/03/2022",
      end_date:"",
      ward: "as123",
      address: "Hoà Thành Đông Hoà Phú Yên",
    });
    zmp.form.fillFromData("#under-form", {
      no_plate: "123456",
      city: "District 12, Ho Chi Minh city",
      chassis_no: "S123456",
      engine_no: "palm",
      bike_tpye: "under_50cc",
    });
    
  }
  function handleOnSubmitButton() {
    const newOrderFromOverForm = zmp.form.convertToData("#over-form");
  const newOrderFromUnderForm = zmp.form.convertToData("#under-form");
    // VALIDATE
    let isValid = true;
    if (
      !newOrderFromOverForm.phone ||
      !newOrderFromOverForm.name ||
      !newOrderFromOverForm.email ||
      !newOrderFromOverForm.address ||
      !newOrderFromOverForm.start_date ||
      !newOrderFromOverForm.end_date||
     
      !newOrderFromUnderForm.no_plate||
      !newOrderFromUnderForm.chassis_no||
      !newOrderFromUnderForm.engine_no||
      !newOrderFromUnderForm.city
    ) {
      isValid = false;
    } else {
      isValid = true;
      
    }
    try {
      if (isValid) {
        //create Order
        try {
          const postDataToApi = async (body) => {
            let response = await CREATE_A_SUBMIT_ORDER(body, token);
          };
          
          postDataToApi(order);
          console.log(order);
          
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Page onPageBeforeOut={onPageBeforeOut}>
      <Card className="bg-white py-0 ">
        <div className="px-[16px] py-[16px]  ">
          <div className="headerInput flex items-center pb-[16px]">
            <Icon
              className="text-black"
              zmp="zi-chevron-left-header"
              size={"22px"}
            />
            <span className="text-[18px] pl-[8px] font-medium">
              Chi Tiết Đơn Hàng
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
            <span className="text-[18px] font-medium">Chi tiết đơn hàng</span>
          </AccordionSummary>

          <AccordionDetails>
            <List
              style={{ listStyle: "none" }}
              className="m-0"
              noHairlines
              id="over-form"
            >
              <ListInput
                label="Số Điện Thoại"
                onChange={(e) => handleOnChange("phone", e)}
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
                onChange={(e) => handleOnChange("fullname", e)}
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
                onChange={(e) => handleOnChange("email", e)}
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
                onChange={(e) => handleOnChange("address", e)}
                placeholder="Nhập địa chỉ"
                clearButton
                required
                validate
              ></ListInput>
              <DatePicker
                label="Ngày hiệu lực "
                name="start_date"
                placeholder="dd/mm/yyy"
                onChange={(date) => handleOnChange("start_date", date)}
                clearButton
                required
                validate
              ></DatePicker>
              <ListInput
                type="text"
                label="Ngày Kết Thúc"
                name="end_date"
                onChange={(date) => handleOnChange("end_date", date)}
                value={order.end_date}
                disabled
              ></ListInput>
              <ListInput
                label="Mã liên"
                name="ward"
                type="text"
                onChange={(e) => handleOnChange("address", e)}
                placeholder="Nhập mã nếu có "
                clearButton
                required
               
              ></ListInput>
              <Radio>
                <span className="text-[15px]">Xuất hoá đơn</span>
              </Radio>
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
          <AccordionDetails>
            <List
              id="under-form"
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
                <option value="over_50cc">Xe trên 50cc</option>
                <option value="under_50cc">Xe dưới 50cc</option>
                <option value="over_200cc">Xe trên 200cc</option>
              </ListInput>
              <ListInput
                label="Tại"
                type="text"
                name="city"
                pattern="'/[^a-z A-Z_\x{00C0}-\x{00FF}\x{1EA0}-\x{1EFF}]/u"
                min={1}
                placeholder="Chọn Tỉnh/ Thành Phố"
                onChange={(e) => handleOnChange("city", e)}
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
            id="panel1a-header"
          >
            <span className="text-[18px] font-medium">Quyền lợi mở rộng</span>
          </AccordionSummary>
        </Accordion>
      </Card>
      <Tabbar className=" tabbar px-[16px] h-[64px] " bottom>
        <div className=" button">
          <Button onClick={handleFillForm} className="" typeName="secondary">
            Thêm vào giỏ hàng
          </Button>
        </div>
        <div className=" button ml-[8px] ">
          <Button
            onClick={() => handleOnSubmitButton()}
            color="#FDE6D5"
            typeName="primary"
          >
            Mua ngay
          </Button>
        </div>
      </Tabbar>
    </Page>
  );
}
