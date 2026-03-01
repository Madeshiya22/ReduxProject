import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import CollectionSlice from '../features/collectionSlice';

export const store = configureStore({
  reducer: {
    search : searchReducer,
    collections: CollectionSlice,
    
  },
});
export default store