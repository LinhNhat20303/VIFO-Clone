import React, { useEffect,  } from "react";
import { Grid, GridItem,Icon, useStore, Page, Tabbar, Link, } from "zmp-framework/react";
import slider from "../static/Image/Home/MaskGroup.png";
import icon from "../static/Image/Home/item.png"


export default function Home() {
  const privacy = useStore("getPrivacyContent");
 // const health = privacy.filter((icon) => [0,1,2,3].include(icon.id) == privacy[0].id);
 
  // useEffect(()=>{
  //   console.log(privacy[0]);
    
  //   console.log(health);
    
  // },[])
  return (
    <Page>
    <div className="bg-white ">
      <div className="slider">
        <img className="w-full" src={slider} alt="" />
      </div>
      <div className="allItem pt-[16px] ">
        <h1 className="itemTitle pl-[16px]  ">Bảo hiểm xe cộ</h1>
        
          <Grid noBorder>
            {privacy.map((content,index)=>{
              return(
                 <GridItem key={`content${index}`} >
              <img className="Privacy" src={icon} alt="" />
              <span className="textPrivacy">{content.label}</span>
            </GridItem>
              )
            })}
          </Grid>
   
      </div>
      
   
    <div className="healthCare pt-[16px] ">
        <h1 className="itemTitle pl-[16px]  ">Bảo hiểm sức khoẻ</h1>
        
          <Grid noBorder>
            {privacy.map((content,index)=>{
              return(
                 <GridItem key={`content${index}`} >
              <img className="Privacy" src={icon} alt="" />
              <span className="textPrivacy">{content.label}</span>
            </GridItem>
              )
            })}
          </Grid>
   
      </div>  
      <div className="other pt-[16px] ">
        <h1 className="itemTitle pl-[16px]  ">Các loại bảo hiểm khác</h1>
        
          <Grid noBorder>
            {privacy.map((content,index)=>{
              return(
                 <GridItem key={`content${index}`} >
              <img className="Privacy" src={icon} alt="" />
              <span className="textPrivacy">{content.label}</span>
            </GridItem>
              )
            })}
          </Grid>
   
      </div>
      <div className="pl-[16px]">
      <h1 className="itemTitle  py-[16px]  ">Tin tức</h1>
      <div className="flex">
       <div>
       <img src={slider} alt="" />
       </div>
        <div className="ml-[16px]">
          <p className="my-0 ">
          Nên lựa chọn bảo hiểm nhân thọ có kỳ hạn hay trọn đời?
          </p>
          <span>
          20/12/2021
          </span>
        </div>
      </div>
      </div>
       </div>
       {/* <Tabbar className="tabbar" bottom >
       <Link className="linkTabbar" tabLink="#tab-1" tabLinkActive>
         
          <i className="fa-solid fa-house text-[#F5832F]"></i>
          <span className="navBarText text-[#F5832F]"> Trang Chủ </span>
        </Link>
        <Link className="linkTabbar" >
        <i className="fa-solid fa-cart-shopping"></i>
          <span className="navBarText"> Giỏ hàng </span>
        </Link>
        <Link className="linkTabbar" >
        <i className="fa-solid fa-circle-user"></i>
          <span className="navBarText"> Trang Chủ </span>
        </Link>
       </Tabbar> */}
    </Page>
  );
}
