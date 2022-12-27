import { getAgent } from "../asyncService/getAgent";
import {
  createReducer,
  //   createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const getAgentInfo = createAsyncThunk(
  "agent/getAgent",
  async (id, { rejectWithValue }) => {
    try {
      return await getAgent(id);
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);

export const agentReducer = createReducer({}, (builder) => {
  builder.addCase(getAgentInfo.fulfilled, (_, action) => action.payload);
});
