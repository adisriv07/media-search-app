import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "", // when we will search anything it will be stored in the query
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTab = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false; //when results already comes loading should stop
    },
    setLoading(state, action) {
      state.loading = true;
      state.error = null; //when its laoding error value should be null
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false; //when it gives error it should not load
    },
    clearResults(state, action) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTabs,
  setError,
  setLoading,
  setResults,
  clearResults,
} = searchSlice.actions;

export default searchSlice.reducer;
