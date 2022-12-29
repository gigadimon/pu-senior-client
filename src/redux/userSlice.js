import { createReducer, createAction } from '@reduxjs/toolkit';

export const logIn = createAction('user/login');
export const logOut = createAction('user/logout');

export const userReducer = createReducer({}, (builder) => {
  builder.addCase(logIn, (_, action) => action.payload).addCase(logOut, (_, action) => ({}));
});
