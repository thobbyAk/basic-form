import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
  message: string ;
  showAlert: boolean
}

const initialState: AlertState = {
  message: '',
  showAlert:false
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<AlertState>) => {
      state.message = action.payload?.message;
      state.showAlert = action.payload?.showAlert;

    },
  },
});

export const { setMessage } = alertSlice.actions;

