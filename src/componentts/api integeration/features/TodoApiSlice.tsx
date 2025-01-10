import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// it is an action
// it will take an api call and then response it in the json format
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  return resp.json();
});
type dataType = {
  id: number;
  title: string;
  completed: boolean;
};

interface TodoApiState {
  isLoading: boolean;
  data: dataType[];
  isError: boolean;
}

export const todoApiSlice = createSlice({
  name: "todoApi",
  initialState: {
    isLoading: false,
    data: [],
    isError: false
  } as TodoApiState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("error ", action.payload);
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default todoApiSlice.reducer;
