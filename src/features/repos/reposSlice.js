import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://api.github.com/users/ayolanrewaju/repos'

const initialState = {
  repos: [],
  isLoading: true
}

export const getRepos = createAsyncThunk('repos/getRepos',
  async () => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch(err) {
      console.log(err)
    }
  }
)

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepos.pending, state =>{
      state.isLoading = true
    })
    builder.addCase(getRepos.fulfilled, (state, action) =>{
      state.repos = action.payload
      state.isLoading = false
    })
    builder.addCase(getRepos.rejected, state => {
      state.isLoading = false
    })
  }
})

export default reposSlice.reducer