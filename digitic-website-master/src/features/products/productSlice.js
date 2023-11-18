import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService from "./productService";


//-----------------This Code is Working------------------------------------

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (data,thunkAPI) => {
    try {
      const {sort,tag,brand,category,minPrice,maxPrice} = data;
      console.log("+++++++++++",data)
      return await productService.getProducts({sort,tag,brand,category,minPrice,maxPrice});
    } catch (error) {
       
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const getAllProducts = createAsyncThunk(
//   "product/getAllProducts",
//   async (data,thunkAPI) => {
//     try {
//       // const {sort,tag,brand,category,minPrice,maxPrice} = data;
//       console.log("+++++++++++",data)
//       return await productService.getProducts(data);
//     } catch (error) {
       
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// -------------------------------------------------------------------

export const addToWishlist = createAsyncThunk(
  "product/addToWishlist",
  async (proId,thunkAPI) => {
    try {
      // const {sort,tag,brand,category,minPrice,maxPrice} = data;
      console.log("+++++++++++",proId)
      return await productService.addToWishlist(proId);
    } catch (error) {
       
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
  product: [],
  // addToWishlist: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message="Product Added to Wishlist !"
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
    
  },
});
export default productSlice.reducer;