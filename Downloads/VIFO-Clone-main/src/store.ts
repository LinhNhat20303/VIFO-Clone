
import { createStore } from 'zmp-core/lite';
import news1 from './static/Image/Home/image4.png';
import news2 from './static/Image/Home/image 5-1.png';
import news3 from './static/Image/Home/image 5-2.png';
import news4 from './static/Image/Home/image 5-3.png';
import news5 from './static/Image/Home/image 5-4.png';
import news6 from './static/Image/Home/image 5.png';
import PVI from "./static/Image/car-insurance/PVI.png";
import BaoMinh from "./static/Image/car-insurance/BaoMinh.png"

const store = createStore({
  state: {
    user: {
      id: '12345678',
      name: 'Zalo',
      avatar: 'ZA',
    },
    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ],
    privacyContent:[
      {
        id:"1",
        label:"BH Bắt buộc TNDS xe ô tô"
      },
      {
        id:"2",
        label:"BH bắt buộc xe mô tô - gắn máy"
      },
      {
        id:"3",
        label:"Bảo hiểm hỗ trợ dịch bệnh"
      },
      {
        id:"4",
        label:"Bảo hiểm vật chất xe ô tô"
      },
      ,
      {
        id:"5",
        label:"Khách nước ngoài tại Việt Nam"
      }
      ,
      {
        id:"6",
        label:"Bảo an tín dụng"
      }

      
      
    ],
    apiToken:{},
    homePageNew:[
      {
        id:1,
        img:news1,
        title:"Nên lựa chọn bảo hiểm nhân thọ có kỳ hạn hay trọn đời?",
        date:"20/12/2021"
      },
      {
        id:2,
        img: news2,
        title:"Lợi ích của bảo hiểm sức khỏe nhóm",
        date:"20/12/2021"
      },
      {
        id:3,
        img:news3,
        title:"Vietcombank phân phối bảo hiểm FWD",
        date:"20/12/2021"
      },
      {
        id:4,
        img:news4,
        title:"Nên lựa chọn bảo hiểm nhân thọ có kỳ hạn hay trọn đời?",
        date:"20/12/2021"
      },
      {
        id:5,
        img:news5,
        title:"Nên lựa chọn bảo hiểm nhân thọ có kỳ hạn hay trọn đời?",
        date:"20/12/2021"
      },
      {
        id:6,
        img:news6,
        title:"Dự đoán thị trường bảo hiểm nhân thọ châu Á – Thái Bình..",
        date:"20/12/2021"
      }
    ],
    dataCarInsurance: [
      {
        id:1,
        img:BaoMinh,
        title:"Bảo hiểm TNDS xe không kinh doanh - 4 chỗ",
        subTitle:"Xe không kinh doanh",
        price:480700,
      },{
        id:2,
        img:PVI,
        title:"Bảo hiểm TNDS Xe Pickup 3 chỗ Không KDBán tải",
        subTitle:"Xe không kinh doanh",
        price:480700,
      },
      {
        id:3,
        img:BaoMinh,
        title:"Bảo hiểm TNDS Xe Pickup 3 chỗ Không KDBán tải",
        subTitle:"Xe không kinh doanh",
        price:480700,
      },
      {
        id:4,
        img:BaoMinh,
        title:"Bảo hiểm TNDS Xe Pickup 3 chỗ Không KDBán tải",
        subTitle:"Xe không kinh doanh",
        price:480700,
      },
      ,
      {
        id:5,
        img:BaoMinh,
        title:"Bảo hiểm TNDS Xe Pickup 3 chỗ Không KDBán tải",
        subTitle:"Xe không kinh doanh",
        price:480700,
      }
    ],
    customerData:[
      {
        "product_code": "TNDSBSMN01210101",
        "fullname": "vu test",
        "phone": "0971231231",
        "email": "phamnguyenlinhdan95@gmail.com",
        "address": "124 Kha Vạn Cân, khu phố 3, Hiệp Bình Chánh, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
        "provider_order_number": "",
        "no_plate": "55A12332",
        "chassis_no": "123A12313",
        "engine_no": "QW23123123",
        "bike_type": 2,
        "start_date": "2022-12-07",
        "year": "1",
        "end_date": "2023-12-07",
        "final_amount": 66000,
        "options": [],
        "product_id": "nwmkv57qz03blag6",
        "attachment_url_files": null,
        "ward": "Hiệp Bình Chánh",
        "district": "Thủ Đức",
        "city": {
            "name": "Hồ Chí Minh",
            "slug": "ho-chi-minh",
            "type": "thanh-pho",
            "name_with_type": "Thành phố Hồ Chí Minh",
            "code": "79",
            "plate_code": [
                41,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59
            ]
        },
        "country": "Việt Nam",
        "full_address": "124 Kha Vạn Cân, khu phố 3, Hiệp Bình Chánh, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
        "id": "nwmkv57qz03blag6",
        "status": 0
    }
    ],
    familyOrder:[],
    familyOrderById:[],
  },
  getters: {
    user({ state }) {
      return state.user
    },
    products({ state }) {
      return state.products;
    },
    getPrivacyContent({state}){
      return state.privacyContent;
    },
    getHealthCareContent({state}){
      return state.healthCareContent;
    },
    getHomePageNew({state}){
      return state.homePageNew;
    },
    getDataCarInsurance({state}){
      return state.dataCarInsurance;
    },
    getCustomerData({state}){
      return state.customerData;
    },
    getApiToken({state}){
      return state.apiToken
    },
    getFamilyOrder({state}){
      return state.familyOrder
    },
    getFamilyOrderById({state}){
      return state.familyOrderById
    }
  },
  actions: {
    setUser({ state }, data) {
      state.user = { ...state.user, ...data }
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    setApiToken({state}, data){
      return (state.apiToken = data)
    },
    setFamilyOrder({state},data){
      return (state.familyOrder = data)
    },
    setFamilyOrderById({state},data){
      return (state.familyOrderById= data)
    }
  },
})

export default store;
