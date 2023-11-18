import axios from "axios";
const base_url = "/api/";
// import { config } from "../../utils/axiosconfig";
// import { base_url } from "../../utils/baseUrl";

// ${data?.brand?`brand=${data?.brand}&&`:""}
// ${data?.tag?`tags=${data?.tag}&&`:""}
//  ${data?.category?`category=${data?.category}&&`:""}
//  ${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}
//  ${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}
// `);


// we pass only one parameter
const getProducts = async (data) => {
  // console.log("--------=======>",data)
    // const response = await axios.get(base_url + `product/getallproduct?${brand?.brand?`brand=${brand?.brand}&&`:""}${tag?.tag?`tags=${tag?.tag}&&`:""}${category?.category?`category=${category?.category}&&`:""}${minPrice?.minPrice?`price[gte]=${minPrice?.minPrice}&&`:""}${maxPrice?.maxPrice?`price[lte]=${maxPrice?.maxPrice}&&`:""}`);
   
    const response = await axios.get(`${base_url}product/getallproduct?${data?.brand?`brand=${data?.brand}&&`:""}${data?.category?`category=${data?.category}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`);

  return response.data;
};

// const getProducts = async (data) => {
   
//     const response = await axios.get(`${base_url}product/getallproduct?${data?.brand?`brand=${data?.brand}&&`:""}`);

//   return response.data;
// };

// --------------------------------------------------------------------------

const addToWishlist = async (prodId) => {
   
    const response = await axios.put(`${base_url}product/wishlist`, {prodId});

  return response.data;
};


const productService = {
  getProducts,
  addToWishlist

};

export default productService;