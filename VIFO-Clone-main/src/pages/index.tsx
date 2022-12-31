import { faM } from "@fortawesome/free-solid-svg-icons";
import { Api } from "@mui/icons-material";
import React, { useEffect } from "react";
import {
  Page,
} from "zmp-framework/react";
import { callAPIFromToken, loadFamilies, loadFamilyById } from "../api-services/services";
import SwiperHomePage from "../components/swiper-home-page";
import store from "../store";

const HomePage = () => {
  useEffect(() => {
    async function fetchData() {


      // api token
     /* const response = await callAPIFromToken();
      store.dispatch("setApiToken", response.access_token);*/
      // hardcode token key
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY2YzE3MTY4Y2ZiNWFlNTY2MDcwMjllZGMzNjc5MTA4NjM0M2ZmN2QzN2EzNzE2MGE3NWMxNjllMTQ4Y2QxYzQ2MGFjNjAwNmU1NjQ3MGVlIn0.eyJhdWQiOiI4IiwianRpIjoiNjZjMTcxNjhjZmI1YWU1NjYwNzAyOWVkYzM2NzkxMDg2MzQzZmY3ZDM3YTM3MTYwYTc1YzE2OWUxNDhjZDFjNDYwYWM2MDA2ZTU2NDcwZWUiLCJpYXQiOjE2NzE0MzAwMzUsIm5iZiI6MTY3MTQzMDAzNSwiZXhwIjoxNzAyOTY2MDM1LCJzdWIiOiIxMjg2MyIsInNjb3BlcyI6W119.qyzy6eC8RIuYx6YaKctBN6TtncEKS3vfTv2lR2xHY5_d457ik0UOrNrZBkDGaAIWU5s7aBkE1rsOG0YoLY9ab6SdlHZF6IY1yJCv7XPBM18cSilNy8ZDgADFyQWvGRsGBY6JBYMPPk3kj6FiySJD1wYpbgBuIaCvB11u9HOKl2rPhKa1eolZ06gKBFmEZp724kRYnd7clDy8hdQ-zokcN3VjVUdJKyO8l8MzZb7PuwMJl9npJY9M1h-1fWFdjsPNX4oZRQpU0bWgNWew9nRBVWMBDFcVp5aiS0Dzv2IxogBnBdlfCM4DWZwwcaUIHP3oqdx0PM7Ie3TT4YX-ADPQSZ8LVfEt8RwAb1YXyiKLLQ0g-C3wqFiFduc-N8kUhNfM7-URQa38sHtyZMigtAFKyxtbA7vuTgfZT-wYFuix0CLUilaJHhK7fo81QqPUjh8don2FK303wP1cLgaiUYfFfPi6eWATSmyRIGF_03xT-Sc8GvpJ8re9GFm4IN11CdktGqcaQHTXKCgr0IFdoiVpiw8nlBDyiHZ9M95LDxrVUspz7LRnuyNymzZuqtKl6qPNbYVOhecIWvDnTEDGBst6h5nT8AKIBRXC23E4Vk6KudTPWBmNB82Keaw_RKaQHBTJR9RNiFxDGAIJECu4ndLKB4UorsUmCh9vR0Z23a4KH-Y"
      localStorage.setItem("token", token)
      store.dispatch("setApiToken",token)
      
      // STORAGE
    // localStorage.setItem("token", response.access_token);    


    }
    fetchData();
  }, []);

  return (
    <Page name="home" navbarLarge>
      {/* Top Navbar */}
      <SwiperHomePage />
    </Page>
  );
};

export default HomePage;
