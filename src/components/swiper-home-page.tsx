import React from "react";
import {
  Page,
  Card,
  Navbar,
  Swiper,
  SwiperSlide,
  Button,
  zmp,
  Box,
} from "zmp-framework/react";
import view1 from "../static/Image/view1.png";
import view2 from "../static/Image/view2.png";
import view3 from "../static/Image/view3.png";

export default function SwiperHomePage() {
 
  return (
    <div className="onboard">      
      <button onClick={()=> zmp.views.main.router.navigate("/Home")}>
hello
      </button>
      <button></button>
      <Swiper  className="main" pagination navigation>
        <SwiperSlide>
         <div>
          <div className="visual">
            <img className="pb-[23px]" src={view1} alt="" />
            <div className="frame">
            <span className="textTitle" >Khám phá và được bảo vệ</span>
            <span className="textInfor">Trải nghiệm không giới hạn các gói bảo hiểm từ chúng tôi</span>
          </div>
          </div>
          
         </div>
        
        </SwiperSlide>
        <SwiperSlide>
         <div>
          <div className="visual">
            <img className="pb-[23px]" src={view2} alt="" />
            <div className="frame">
            <span className="textTitle" >Bảo vệ 24/7</span>
            <span className="textInfor">Yêu cầu bảo hiểm ngay trên ứng dụng Zalo và kết nối trực tiếp với nhân viên tư vấn của chúng tôi 24/7</span>
          </div>
          </div>
          
         </div>
        
        </SwiperSlide>
        <SwiperSlide>
         <div>
          <div className="visual">
            <img className="pb-[23px]" src={view3} alt="" />
            <div className="frame">
            <span className="textTitle" >Quy trình hiện đại </span>
            <span className="textInfor">Cho phép xác nhận khách hàng qua số điện thoại để chúng tôi có thể phục vụ tốt nhất cho khách hàng.</span>
          </div>
          </div>
          
         </div>
        
        </SwiperSlide> 
  
      </Swiper>
   
    </div>
  );
}
