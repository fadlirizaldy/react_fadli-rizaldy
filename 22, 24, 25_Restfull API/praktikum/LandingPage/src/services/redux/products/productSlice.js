import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./initialStateProduct";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async (object, { rejectWithValue }) => {
  // console.log(getState());
  try {
    // const { data } = await axios.get("https://642e77348ca0fe3352d049ba.mockapi.io/products");
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

export const addProductAxios = createAsyncThunk("addProduct", async (newProductData, { rejectWithValue }) => {
  try {
    const { data } = await axios
      .post("https://642e77348ca0fe3352d049ba.mockapi.io/products", newProductData)
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((err) => console.log(err));

    return data;
  } catch (error) {
    rejectWithValue(error.response);
  }
});

export const deleteProductAxios = createAsyncThunk("deleteProducts", async (object, { rejectWithValue }) => {
  // console.log(getState());
  try {
    let id = object.id;

    // if delete button at bottom get click, remove the latest data
    if (id === -1) {
      const { data } = await axios
        .get("https://642e77348ca0fe3352d049ba.mockapi.io/products")
        .then((res) => {
          return res;
        })
        .catch((err) => console.log(err));

      // change id from -1 to id from latest data to get filtered
      const latestDataId = data.slice(-1)[0].id;
      id = latestDataId;
    }

    const response = await axios
      .delete(`https://642e77348ca0fe3352d049ba.mockapi.io/products/${id}`)
      .then((res) => res)
      .catch((err) => console.log(err));
    return response.data;
  } catch (error) {
    rejectWithValue(error.response);
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: async (state, action) => {
      const newProduct = {
        id: action.payload.id,
        name: action.payload.name,
        category: action.payload.category,
        image: action.payload.image,
        freshness: action.payload.freshness,
        description: action.payload.description,
        price: action.payload.price,
      };

      // await axios
      //   .post("https://642e77348ca0fe3352d049ba.mockapi.io/products", newProduct)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => console.log(err));
      // return [...state, newProduct];
    },
    deleteProduct: (state, action) => {
      const id = action.payload.id;

      if (id === -1) {
        return state.slice(0, -1);
      }
      return state.filter((data) => data.id != id);
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [addProductAxios.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
    [deleteProductAxios.fulfilled]: (state, action) => {
      const prodId = action.payload.id;
      state = state.filter((data) => {
        return data.id != prodId;
      });
      setTimeout(() => {
        alert("Berhasil menghapus data");
      }, 300);
      return state;
    },
  },
});

// export action
export const { addProduct, deleteProduct } = productSlice.actions;

// export reducer
export default productSlice.reducer;
