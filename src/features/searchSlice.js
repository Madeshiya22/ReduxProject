import React, { act } from 'react'
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        searchResults(state, action) {
            state.loading = false;
            state.results = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        searchError(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        clearResults(state) {
            state.results = [];
            state.error = null;
        }
    },
});

export const { setQuery, setActiveTab, searchResults, setLoading, searchError } = searchSlice.actions;
export default searchSlice.reducer;