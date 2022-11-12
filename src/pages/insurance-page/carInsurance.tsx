import React from 'react'
import { Card, Page, Box, List,ListInput, Button } from "zmp-framework/react"

export default function carInsurance() {
  return (
    <Page>
        <Card className='bg-white py-0 mt-[-23px] '>
   
            <div className="inputCarInsurence px-[16px] ">
               <List
               className='mb-0'
            style={{ listStyle: 'none' }}
            form
            id='my-form'
            noHairlines
          >
           
            <ListInput
              label='Mục đích sử dụng'
              type='select'
              placeholder='Select your city'
              name='city'
              validate
            >
               <option value='1'>Tất Cả</option>
              <option value='1'>Hồ Chí Minh</option>
              <option value='2'>Hà Nội</option>
            </ListInput>
          </List>
          <div className="dualSelection flex justify-between">
            <div>
            <List
            className='m-0  w-[162px]'
            style={{ listStyle: 'none' }}
            form
            id='my-form'
            noHairlines
          >
           
            <ListInput
              className='input1-2 '
              label='Số chổ/Trọng tải (tấn)'
              type='select'
              placeholder='Select your city'
              name='city'
              validate
            >
               <option value='1'>Tất Cả</option>
              <option value='1'>Hồ Chí Minh</option>
              <option value='2'>Hà Nội</option>
            </ListInput>
          </List>
            </div>
            <div>
            <List
            className='m-0 w-[162px]'
            style={{ listStyle: 'none' }}
            form
            id='my-form'
            noHairlines
          >
           
            <ListInput
             className='input1-2 '
              label='Nhà cung cấp'
              type='select'
              placeholder='Select your city'
              name='city'
              validate
            >
               <option value='1'>Tất Cả</option>
              <option value='1'>Hồ Chí Minh</option>
              <option value='2'>Hà Nội</option>
            </ListInput>
          </List>
            </div>
          </div>
            
            </div>
        </Card>
    </Page>
  )
}
