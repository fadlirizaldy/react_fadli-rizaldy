import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async (object, { rejectWithValue }) => {
  try {
    let data;
    await axios
      .get("https://642e77348ca0fe3352d049ba.mockapi.io/products")
      .then((res) => {
        data = res.data;
      })
      .catch((err) => console.log(err));
    // console.log(data);
    return data;
  } catch (error) {
    rejectWithValue(error.response);
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        no: action.payload.no,
        name: action.payload.name,
        category: action.payload.category,
        image: action.payload.image,
        freshness: action.payload.freshness,
        description: action.payload.description,
        price: action.payload.price,
      };

      return [...state, newProduct];
    },
    deleteProduct: (state, action) => {
      const id = action.payload.id;

      if (id === -1) {
        return state.slice(0, -1);
      }

      return state.filter((data) => data.no != id);
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

// export action
export const { addProduct, deleteProduct } = productSlice.actions;

// export reducer
export default productSlice.reducer;
