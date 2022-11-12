
import { createStore } from 'zmp-core/lite';
import news1 from './static/Image/Home/image4.png';
import news2 from './static/Image/Home/image 5-1.png';
import news3 from './static/Image/Home/image 5-2.png';
import news4 from './static/Image/Home/image 5-3.png';
import news5 from './static/Image/Home/image 5-4.png';
import news6 from './static/Image/Home/image 5.png';

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
        title:"Dự đoán thị trường bảo hiểm nhân thọ châu Á – Thái Bình Duong",
        date:"20/12/2021"
      }
    ]
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
    }
  },
  actions: {
    setUser({ state }, data) {
      state.user = { ...state.user, ...data }
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})

export default store;
