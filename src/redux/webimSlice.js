import { createReducer, createAsyncThunk, combineReducers, createAction } from '@reduxjs/toolkit';
import { getWebimState } from '../asyncService/getWebimState';
import { disconnectAgent } from '../asyncService/disconnectAgent';

export const getWebimStateAction = createAsyncThunk(
  'webim/getState',
  async (_, { rejectWithValue }) => {
    try {
      return await getWebimState();
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);

export const disconnectAgentAction = createAsyncThunk(
  'agent/disconnect',
  async (id, { rejectWithValue }) => {
    try {
      return await disconnectAgent(id);
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);

export const clearOfflineList = createAction('clearOfflineList');

const infoReducer = createReducer([], (builder) => {
  builder.addCase(getWebimStateAction.fulfilled, (_, action) =>
    action.payload.info?.filter((el) => el.department !== 'No department')
  );
});

const offlineListReducer = createReducer([], (builder) => {
  builder
    .addCase(disconnectAgentAction.fulfilled, (state, action) => [...state, action.meta.arg])
    .addCase(clearOfflineList, (_, __) => []);
});

const triggerStatusesReducer = createReducer({}, (builder) => {
  builder.addCase(
    getWebimStateAction.fulfilled,
    (_, action) => action.payload.checkedStatuses.triggerStatuses
  );
});

const neutralStatusesReducer = createReducer({}, (builder) => {
  builder.addCase(
    getWebimStateAction.fulfilled,
    (_, action) => action.payload.checkedStatuses.neutralStatuses
  );
});

const departmentReducer = createReducer([], (builder) => {
  builder.addCase(getWebimStateAction.fulfilled, (_, action) =>
    action.payload.departInfo?.filter((el) => el.department.name !== 'No department')
  );
});

export const webimReducer = combineReducers({
  info: infoReducer,
  triggerStatuses: triggerStatusesReducer,
  neutralStatuses: neutralStatusesReducer,
  departmentInfo: departmentReducer,
  offlineList: offlineListReducer
});
