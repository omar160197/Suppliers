import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    supplierObject:{},
  };

  export const supplierSlice=createSlice({
      name:"supplier",
      initialState,
      reducers:{
        addSupplierData:(state,action)=>{
            state.supplierObject=action.payload
        },
        
       
      },
      extraReducers:{}
  })
  export const { addSupplierData} = supplierSlice.actions;
  export default supplierSlice.reducer

