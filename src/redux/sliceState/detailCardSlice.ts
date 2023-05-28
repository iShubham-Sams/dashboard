import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MdNoEncryptionGmailerrorred, MdWarningAmber } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { IconType } from "react-icons";

interface DetailCardState {
  status: string;
  value: string;
  tripId: string;
  transporter?: string;
  driverName: string;
  driverNumber: string;
  lastKnownDetail?: string;
  checkpointDetails?: string;
  item?: string;
  to?: string;
  from?: string;
}

const initialState: { value: DetailCardState[] } = {
  value: [
    {
      status: "missing truck",
      value: "5cr",
      tripId: "123456",
      transporter: "VRL Logistics",
      from: "mumbai",
      to: "bangalore",
      driverName: "rahul",
      driverNumber: "+91-9876543210",
      lastKnownDetail: "kolhapur(26-oct-2017,11:12pm)",
    },
    {
      status: "detention truck",
      value: "2cr",
      tripId: "123456",
      transporter: "VRL Logistics",
      from: "mumbai",
      to: "bangalore",
      driverName: "rahul",
      driverNumber: "+91-9876543210",
      checkpointDetails: "kolhapur(26-oct-2017,11:12pm)",
    },
    {
      status: "high value shipment",
      value: "25cr",
      tripId: "123456",
      driverName: "rahul",
      driverNumber: "+91-9876543210",
      item: "tmt steel bars",
    },
  ],
};

export const detailSlice = createSlice({
  name: "detailCard",
  initialState,
  reducers: {
    setDetail: (state, action: PayloadAction<DetailCardState[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setDetail } = detailSlice.actions;
export default detailSlice.reducer;
