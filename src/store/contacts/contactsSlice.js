import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts:[],
    selectedContact:{
    gender: '',
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    position: "",
    spokenLanguage: "",},
  };

  export const contactsSlice=createSlice({
      name:"contactSlice",
      initialState,
      reducers:{
        addContact:(state,action)=>{
            state.contacts.push(action.payload)
        },
        
        removeContact:(state,action)=>{
            state.contacts.splice(action.payload,1)
            if(state.contacts.length !== 0){
                state.selectedContact=state.contacts[0]
            }else{
                state.selectedContact={
                    gender: '',
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    position: "",
                    spokenLanguage: "",
                }
        }
    },

        getSelectedContact:(state,action)=>{
            console.log(action.payload);
            if(state.contacts.length !== 0){
                state.selectedContact=state.contacts[action.payload]
            }else{
                state.selectedContact={
                    gender: '',
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    position: "",
                    spokenLanguage: "",
                }
                
            }
        }
      },
      extraReducers:{}
  })
  export const { addContact ,removeContact , getSelectedContact} = contactsSlice.actions;
  export default contactsSlice.reducer

