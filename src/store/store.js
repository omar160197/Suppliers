import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import  contactSlice  from './contacts/contactsSlice';
import supplierSlice from './suopplier/supplierSlice';



export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    contact:contactSlice,
    supplier:supplierSlice
  },
});
