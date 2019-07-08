import axios from 'axios'
//过滤器
axios.interceptors.response.use(
    res => res.data,err => Promise.reject(err)
);
axios.defaults.baseURL = 'http://132.232.89.22:3000'; // 公共的
// let getBanner = ()=>{
//     return axios.get('/banner')
// };
// //const getBanner = ()=>axios.get('/banner')
// const getList = () =>{
//     return axios.get('/listapi')
// };
export default axios //{getBanner,getList}