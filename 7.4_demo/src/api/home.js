import axios from './index'
//订单的请求
let getBanner = ()=>{
    return axios.get('/banner')
};
//const getBanner = ()=>axios.get('/banner')
const getList = () =>{
    return axios.get('/listapi')
};
export {getBanner,getList}

//