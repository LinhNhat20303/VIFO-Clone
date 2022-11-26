import React,{useEffect, useState} from 'react'
import axios from 'axios'
import * as services from "../api-services/services"
import {Page, Card, List, ListInput,Box, Radio, Icon,Button}  from "zmp-framework/react";
import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons';

const testApi = () => {
  let [data,setData] = useState({})
  let [insuranceNumber,setInsuranceNumber] = useState(null)

  let currenceNumber = ''
  useEffect(()=>{

    // let response = services.verifyShCode("SsSYRJ0LZeBw")
    const getdata =  async () => {
      let response = await services.getBHXHInfo(insuranceNumber)
      setData(response.data[0]);
      
    }
    getdata()
    
    
    
 },[])
 console.log(data.Quoc_tich);
 
 
  return (
    <Page>
      <Card className="bg-white py-0 ">
          <List
            form
            id='my-form'
            className='px-[16px] m-0'
            noHairlines
          >
              <div className="headerInput flex items-center py-[16px]">
            <Icon className="text-black" zmp="zi-chevron-left-header" size={"22px"} />
            <span className="text-[18px] pl-[8px] font-medium">
              Chi Tiết Đơn Hàng
            </span>
            
          </div>
         <div className="flex ">
         <Box >
              <Radio name='gender' value='male' defaultChecked label='Cấp Mới' />
            </Box>
            <Box >
              <Radio name='gender' value='male' defaultChecked label='Tái Tục' />
            </Box>
         </div>
            <ListInput
              label='Số Bảo Hiểm Xã Hội'
              type='number'
              placeholder='Nhập số BHXH của bạn '
              clearButton
              info='Vui lòng nhập số BHXH để kiểm tra thẻ BHYT cũ'
              name='number'
              //onChange={setInsuranceNumber(value)}
              required
              errorMessage='Invalid'
              validate
            ></ListInput>
            <ListInput
              label='CCCD'
              type='number'
              placeholder='Nhập số CCCD của bạn'
              clearButton
              required
              name='age'
              value={data.So_cmt}
            ></ListInput>
           <ListInput
              label='Họ và tên'
              type='text'
              placeholder='Nhập họ và tên của bạn '
              clearButton
              name='fullName'
              errorMessage='Invalid'
              validate
              value={data.ho_ten}
            ></ListInput>
            <ListInput
              label='Ngày Sinh'
             // type='datepicker'
              clearButton
              name='dateOfBirth'
              required
              errorMessage='Invalid'
              validate
             value={data.ngay_sinh}
            ></ListInput>
             <ListInput
              label='Dân tộc'
             value={data.dan_toc}
              type='select'
              clearButton
              name='religion'
              required
              errorMessage='Invalid'
              validate
            ><option value='1'>kinh</option>
            <option value='2'>Khác</option>
            </ListInput>
             <ListInput
              label='Giới Tính'
            value={data.gioi_tinh}
              type='select'
              name='sex'
              validate
            >
              <option value='1'>Nam</option>
              <option value='2'>Nữ</option>
              <option value='2'>Khác</option>
            </ListInput>
           <div className='pt-[8px]'>
            <p className='my-[4px]'>Thẻ Cũ</p>
            <div className="h_line"></div>
            <div className="dualSelection flex justify-between mt-[8px]">
            <div>
              <List
                className="m-0 pr-[4px] w-[162px]"
                form
                id="my-form"
                noHairlines
              >
                <ListInput
                  className="input1-2 "
                  label="Ngày Hiệu Lực"
                 value={data.ngay_cuoi_the_cu}
                  //type="datepicker"
                  validate
                >
                </ListInput>
              </List>
            </div>
            <div>
              <List
                className="m-0 pl-[8px] w-[162px]"
                form
                id="my-form"
                noHairlines
              >
                <ListInput
                  className="input1-2 "
                  label="Ngày Hết Hiệu Lực"
                  //type="datepicker"
                 value={data.ngay_dau_the_cu}
                  validate
                >
                </ListInput>
              </List>
            </div>
          </div>
           </div>
           <div className='pt-[8px]'>
            <p className='my-[4px]'>Thẻ Mới </p>
            <div className="h_line"></div>
            <div className="dualSelection flex justify-between mt-[8px]">
            <div>
              <List
                className="m-0 pr-[4px] w-[162px]"
                form
                id="my-form"
                noHairlines
              >
                <ListInput
                  className="input1-2 "
                  label="Ngày Hiệu Lực"
                  type="datepicker"
                  placeholder="Select your city"
                  name="city"
                  validate
                >
                </ListInput>
              </List>
            </div>
            <div>
              <List
                className="m-0 pl-[8px] w-[162px]"
                form
                id="my-form"
                noHairlines
              >
                <ListInput
                  className="input1-2 "
                  label="Ngày Hết Hiệu Lực"
                  type="datepicker"
                  placeholder="Select your city"
                  name="city"
                  validate
                >
                </ListInput>
              </List>
            </div>
          </div>
           </div>
          <div className='pt-[8px]'>
          <ListInput
              label='Thành Phố Đăng ký Khám Chữa Bệnh'
              type='text'
              placeholder='Thành Phố'
              clearButton
              name='cityResigned'
              required
              errorMessage='Invalid'
              validate
            ></ListInput>
            <ListInput
              label='Bệnh Viện Đăng Ký Tham Gia Chữa Bệnh'
              type='text'
              placeholder='Nhập họ và tên của bạn '
              clearButton
              name='hospitalResigned'
              required
              errorMessage='Invalid'
              validate
            ></ListInput>
          </div>
          </List>
        </Card>
      <Card className='bg-white py-0'>
      <Button onClick={()=> setInsuranceNumber()}> check</Button>
      </Card>
    </Page>
    
    )
}

export default testApi
