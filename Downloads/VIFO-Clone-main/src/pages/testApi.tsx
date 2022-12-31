import React,{useEffect, useState, useReducer} from 'react'
import axios from 'axios'
import * as services from "../api-services/services"
import {Page, Card, List, ListInput,Box, Radio, Icon,Button}  from "zmp-framework/react";
import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons';
import { remove } from 'zmp-framework/types/dom';

export default function testApi(){
  let [data,setData] = useState({})
  
  //const listCustomer = []
 
  
  const [listCustomer,setListCustomer] = useState([])
   
  
 
  
useEffect(()=>{
  console.log(listCustomer);
},[data])

  // useEffect(()=>{
  //   // let response = services.verifyShCode("SsSYRJ0LZeBw")
  //   const getdata =  async () => {
  //     let response = await services.getBHXHInfo(insuranceNumber)
  //     setData(response.data[0]);
      
  //   }
  //   getdata()
    
    
    
  // },[])

 console.log(data);
 
const getdata =  async (BHXHnumber) => {
  let response = await services.getBHXHInfo(BHXHnumber)
  setData(response.data[0]);
}

const getdata2 =  async (BHXHnumber) => {
  let response = await services.getBHXHInfo(BHXHnumber)
  return response.data[0];
}

 function handleOnChange (event) {
  //console.log(event.target.value)
  if(/^\d{10}$/.test(event.target.value)){
   // console.log(123);
    getdata(event.target.value)
 
  } 
  listCustomer.push(data);
  delete listCustomer[0]
  
}
const [, forceUpdate] = useReducer(x => x + 1, 0);

const handleOnChange2 = async (event) => {
  //console.log(event.target.value)
try {
  if(/^\d{10}$/.test(event.target.value)){
    // console.log(123);
    let response = await services.getBHXHInfo(event.target.value)
    listCustomer.push(response.data[0]);
     setListCustomer(listCustomer)} 
} catch (error) {
  
}
    console.log(listCustomer);
    forceUpdate()
  
}

  return (
    <Page>
      <Card className="bg-white py-0 ">
          <List
            
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
              label='Số Bảo Hiểm Xã Hội Mới'
              type='text'
              placeholder='Nhập số BHXH của bạn '
              clearButton
              info='Vui lòng nhập số BHXH để kiểm tra thẻ BHYT cũ'
              name='number'
              pattern='^[0-9]{10}'
              maxlength={10}
              onChange={e => handleOnChange2(e)}
              required
              errorMessage='Invalid'
              validate

            
            ></ListInput>
         <ListInput
              label='Số Bảo Hiểm Xã Hội'
              type='text'
              placeholder='Nhập số BHXH của bạn '
              clearButton
              info='Vui lòng nhập số BHXH để kiểm tra thẻ BHYT cũ'
              name='number'
              pattern='^[0-9]{10}'
              maxlength={10}
              onChange={e => handleOnChange(e)}
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
      <Card className='bg-white py-0  mt-[4px] px-[16px]'>
      <div className='px-[16px] m-0' >

      <div className="headerInput flex items-center py-[16px]">
            <Icon className="text-black" zmp="zi-chevron-left-header" size={"22px"} />
            <span className="text-[18px] pl-[8px] font-medium">
              Thông Tin Khách Hàng 
            </span>
            
          </div>
          {listCustomer.map((cus,index)=>{
            return(    
                   
              <List
            
              id='my-form'
              className='px-[16px] m-0'
              noHairlines
            >
               
           <ListInput
                label='Số Bảo Hiểm Xã Hội Mới'
                type='text'
                placeholder='Nhập số BHXH của bạn '
                clearButton
                info='Vui lòng nhập số BHXH để kiểm tra thẻ BHYT cũ'
                name='number'
                pattern='^[0-9]{10}'
                maxlength={10}
                required
                errorMessage='Invalid'
                validate
  
              
              ></ListInput>
           <ListInput
                label='Số Bảo Hiểm Xã Hội'
                type='text'
                placeholder='Nhập số BHXH của bạn '
                clearButton
                info='Vui lòng nhập số BHXH để kiểm tra thẻ BHYT cũ'
                name='number'
                pattern='^[0-9]{10}'
                maxlength={10}
                onChange={e => handleOnChange(e)}
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
            )
          })}
      </div>
      </Card>
    </Page>
    
    )
}

 
