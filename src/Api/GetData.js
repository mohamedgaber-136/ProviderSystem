import axios from 'axios'
// Base Url 
// const apiUrl ='https://kayann.elgolfapp.com/api/v1/' 
export const GetProductsData = (setData,type) =>{
  const accessToken = localStorage.getItem('accessToken');
    axios.get(`${apiUrl}${type}`,{headers: {
                 Authorization: `Bearer ${accessToken}`}},
               ).then((res)=>setData(res.data.data))
}
export const DeleteProductsData = (type,id) =>{
    const accessToken = localStorage.getItem('accessToken');
    axios.delete(`${apiUrl}${type}/${id}`,{headers: {
                 Authorization: `Bearer ${accessToken}`}},
               )
}
export const SendProductsData = (type,newObj) =>{
    const accessToken = localStorage.getItem('accessToken');
    axios.post(`${apiUrl}${type}`,newObj,{headers: {
                 Authorization: `Bearer ${accessToken}`}},
               )
}
export const UpdateProduct = (type,id,newObj) =>{
  const accessToken = localStorage.getItem('accessToken');
  const obj = {...newObj,_method:'PUT'}
  axios.post(`${apiUrl}${type}/${id}`,obj,{headers: {
               Authorization: `Bearer ${accessToken}`}},
             )
}
export const ShowProductsData = (setData,type,id) =>{
  const accessToken = localStorage.getItem('accessToken');
    axios.get(`${apiUrl}${type}/${id}`,{headers: {
                 Authorization: `Bearer ${accessToken}`}},
               ).then((res)=>setData(res.data.data))
}
export const BankStatmentData = (setData,type,id) =>{
  const accessToken = localStorage.getItem('accessToken');
    axios.get(`${apiUrl}${type}/${id}/statment`,{headers: {
                 Authorization: `Bearer ${accessToken}`}},
               ).then((res)=>setData(res.data.data))
}