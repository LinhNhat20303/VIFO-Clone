import React, { useEffect } from "react";
import { Grid, GridItem,Icon, useStore, Page } from "zmp-framework/react";
import slider from "../static/Image/Home/MaskGroup.png";
import icon from "../static/Image/Home/item.png"

export default function Home() {
  const privacy = useStore("getPrivacyContent");
  const healthCare = useStore ("getHealthCareContent");
  return (
    <Page>
    <div className="bg-white  ">
      <div className="slider">
        <img className="w-full" src={slider} alt="" />
      </div>
      <div className="allItem pt-[16px] ">
        <h1 className="itemTitle pl-[16px]  ">Bảo hiểm xe cộ</h1>
        
          <Grid noBorder>
            {privacy.map((content,index)=>{
              return(
                 <GridItem >
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
                 <GridItem >
              <img className="Privacy" src={icon} alt="" />
              <span className="textPrivacy">{content.label}</span>
            </GridItem>
              )
            })}
          </Grid>
   
      </div>
    </div>
    </Page>
  );
}
