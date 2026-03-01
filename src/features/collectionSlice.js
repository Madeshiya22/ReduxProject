import React from 'react'
import { createSlice } from '@reduxjs/toolkit';


const intitialState = {
    items: JSON.parse(localStorage.getItem("collections") || "[]"),
}

const CollectionSlice = createSlice({
    name: 'collections',
    initialState: intitialState,
    reducers: {
        addToCollections(state, action) {
           const alreadyExists = state.items.find((item)=> item.id === action.payload.id)
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem("collections", JSON.stringify(state.items));
            }
        },
        removeFromCollections(state, action) {
         state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem("collections", JSON.stringify(state.items));
        },
            clearCollections(state) {
            state.items = [];
            localStorage.removeItem("collections");
        }

        
    }
})

export const { addToCollections, removeFromCollections, clearCollections } = CollectionSlice.actions;
export default CollectionSlice.reducer;