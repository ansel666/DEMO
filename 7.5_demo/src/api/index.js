import axios from 'axios'
axios.interceptors.response.use(
    res=>res.data,err=>Promise.reject(err)
);
axios.defaults.baseURL='http://132.232.89.22:3000'

const getBanner = ()=>axios.get('/banner')
const getList = () =>{
        return axios.get('/listapi')
    };
export  {getBanner,getList}