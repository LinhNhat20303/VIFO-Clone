import React, { useEffect, useState } from "react";
import {
  Card,
  Page,
  Box,
  List,
  ListInput,
  Button,
  Icon,
  useStore,
  zmp,
} from "zmp-framework/react";
import { formatCurrency, showStringLength } from "../../helper";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import { getProductBySlug, loadProductFamilyById } from "../../api-services/services";
import BaoMinh from "../../static/Image/car-insurance/BaoMinh.png";

export default function carInsurance({zmproute}) {
  
  const queries = zmproute.query
  const token = localStorage.getItem("token");
  const idFamilyOrder = localStorage.getItem("idFamilyOrder")
  const [dataCarInsuranceInstead, setDataCarInsuranceInstead] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const familyOrderById = await loadProductFamilyById(queries.id, token)
      setDataCarInsuranceInstead(familyOrderById.data);
    }
    fetchApi();
  }, []);
  
   async function handleOnInformationForm(slug ,product_code){
    zmp.views.main.router.navigate({path:'/productForm', query: {slug:slug, product_code: product_code}})
      }
  return (
    <Page>
      <Card className="bg-white py-0 ">
        <div className="inputCarInsurence px-[16px] py-[16px] ">
          <div className="headerInput flex items-center pb-[16px]">
            <Icon
              className="text-black"
              zmp="zi-chevron-left-header"
              size={"22px"}
            />
            <span className="text-[18px] pl-[8px] font-medium">
              BH Bắt buộc TNDS xe ô tô
            </span>
          </div>
          <List className="my-0 pb-[8px]" noHairlines>
            <ListInput
              label="Mục đích sử dụng"
              type="select"
              placeholder="Select your city"
              name="city"
              validate
            >
              <option value="1">Tất Cả</option>
              <option value="1">Hồ Chí Minh</option>
              <option value="2">Hà Nội</option>
            </ListInput>
          </List>
          <div className="dualSelection flex justify-between">
            <div>
              <List
                className="m-0 pr-[8px] w-[162px]"
                style={{ listStyle: "none" }}
                form
                id="my-form"
                noHairlines
              >
                <ListInput
                  className="input1-2 "
                  label="Số chổ/Trọng tải (tấn)"
                  type="select"
                  placeholder="Select your city"
                  name="city"
                  validate
                >
                  <option value="1">Tất Cả</option>
                  <option value="1">Hồ Chí Minh</option>
                  <option value="2">Hà Nội</option>
                </ListInput>
              </List>
            </div>
            <div>
              <List
                className="m-0 pl-[8px] w-[162px]"
                style={{ listStyle: "none" }}
                form
                id="my-form"
                noHairlines
              >
                <ListInput
                  className="input1-2 "
                  label="Nhà cung cấp"
                  type="select"
                  placeholder="Select your city"
                  name="city"
                  validate
                >
                  <option value="1">Tất Cả</option>
                  <option value="1">Hồ Chí Minh</option>
                  <option value="2">Hà Nội</option>
                </ListInput>
              </List>
            </div>
          </div>
        </div>
      </Card>
      {dataCarInsuranceInstead.map((card, index) => {
        const label = card.provider.data.name;
        const description = card.provider.data.description;
        const img = card.provider.data.logo
        const price = card.prices.data[0].sale_price
        const slug = card.translation.vi.slug
        const product_code = card.product_code

        return (
          <Card key={`Card-${index}`} className="bg-[#F2F4F8] mt-[8px] p-0">
            <div className="firstPart px-[16px] bg-white pt-[16px] pb-[8px]">
              <div className=" flex ">
                <div className="pl-[8px]">
                  {" "}
                  <img className="pt-2" src={img} alt="" />
                </div>
                <div className="text pl-[16px]">
                  <div className="w-[242px] h-[36px] mb-[4px]">
                    <p className="my-0 text-[14px] font-medium">{label}</p>
                  </div>
                  <div className="w-[242px] h-[16px] mb-[4px]">
                    {" "}
                    <span className="font-normal text-[12px] text-[#99A3AD]">
                      {showStringLength(description, 30)}
                    </span>
                  </div>
                  <div className="w-[242px] h-[24px] ">
                    <div className="flex items-end">
                      <span className="font-bold text-[18px] text-[#F5832F]">
                        {formatCurrency(price)}đ
                      </span>
                      <span className="font-normal text-[12px] text-[#99A3AD]">
                        /năm
                      </span>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="secondPart  px-[16px] bg-white mt-[1px]">
              <div className="flex justify-between py-[8px]">
                <div className="w-[148px] h-[38px] ">
                  <span className="text-[#99A3AD] font-normal text-[12px] pb-[4px]">
                    Loại xe
                  </span>
                  <p className="m-0 font-medium text-[14px]">
                    Xe không kinh doanh
                  </p>
                </div>
                <div className="w-[148px] h-[38px]">
                  <span className="text-[#99A3AD] font-normal text-[12px] ">
                    Số chổ ngồi{" "}
                  </span>
                  <p className="m-0  font-medium text-[14px]">4</p>
                </div>
              </div>
            </div>
            <div className="thirdPart  px-[16px] bg-white mt-[1px]">
              <div className="pt-[8px]">
                <span className="text-[#99A3AD] font-normal text-[12px] pb-[4px]">
                  Tổng số tiền bảo hiểm
                </span>
                <p className="mt-[4px] mb-0 font-medium text-[14px]">
                  {formatCurrency(150000000)}đ
                </p>
              </div>
              <div className="flex py-[16px] justify-between">
                <div className=" px-0 ">
                  <Button onClick={()=>handleOnInformationForm(slug, product_code)}   typeName="tertiary">
                    Xem chi tiết
                  </Button>
                </div>
                <div className="button  h-[32px] w-[156px] px-0 ">
                  <Button className=" " typeName="primary">
                    Xem Thêm
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    <div className="flex">
    <Button
        onClick={() => zmp.views.main.router.navigate("/testForm")}
        typeName="primary "
      >
        Chi tiết đơn hàng
      </Button>
      <Button onClick={()=> zmp.views.main.router.navigate("/carForm")}>
        Car Form
      </Button>
    </div>
    </Page>
  );
}
