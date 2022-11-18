import React, { useEffect,  } from "react";
import { Grid, GridItem,Icon, useStore, Page, Tabbar, Link,Button, zmp} from "zmp-framework/react";
import slider from "../static/Image/Home/MaskGroup.png";
import icon from "../static/Image/Home/item.png"


export default function Home() {
  const privacy = useStore("getPrivacyContent");
  
  const newsData = useStore("getHomePageNew");
 // const health = privacy.filter((icon) => [0,1,2,3].include(icon.id) == privacy[0].id);
 
  useEffect(()=>{
    console.log(newsData);
    
    
    
  },[])
  return (
    <Page>
    <div className="bg-white pb-[55px] ">
      <div className="slider">
        <img className="w-full" src={slider} alt="" />
      </div>
      <div className="allItem pt-[16px] ">
        <h1 className="itemTitle pl-[16px]  ">Bảo hiểm xe cộ</h1>
        
          <Grid noBorder>
            {privacy.map((content,index)=>{
              return(
                 <GridItem key={`content${index}`}  onClick={()=>zmp.view.main.router.navigate("/insurance-page/carInsurance")}>
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
      {/* <div className="pl-[16px]">
      <h1 className="itemTitle  my-[16px]  ">Tin tức</h1>
      {newsData.map((item,index)=>{
        return(
          <div key={`item${index}`} className="flex frameNews">
       <div  className="newsImg">
       <img src={item.img} alt="" />
   
       </div>
        <div className=" newsText">
          <p className="my-0 newsTextTitle ">
          {item.title}
          </p>
          <span className="newsTextSpan">
          20/12/2021
          </span>
        </div>
      </div>
        )
      })}
      
      </div> */}
       {/* <div className="button absolute">
       <Button
           className=" "
            typeName='destructive'
           
          >
            Xem Thêm 
          </Button>
<<<<<<< HEAD
       </div>  */}
=======
       </div>
>>>>>>> a7c9d4bbfd7b17587176121b7c82fc0a8c482c8b
       </div>
      
       <Tabbar className="tabbar" bottom >
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
       </Tabbar>
    </Page>
  );
}
