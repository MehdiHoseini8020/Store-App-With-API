import { createSlice } from "@reduxjs/toolkit";

export interface SavedTypes {
  id: string;
  image: string;
  category: string;
  price: string;
  number: number;
}

interface initial_state {
  Items: any | undefined;
  number: number;
  SavedList: SavedTypes[];
}
const initialState: initial_state = {
  Items: [],
  number: 0,
  SavedList: [],
};
export const shopReducer = createSlice({
  name: "Shop",
  initialState,
  reducers: {
    GetData: (state, { payload }: { payload: any }) => {
      state.Items = payload;
      console.log(payload);
    },
    Plus: (state, { payload }: { payload: number }) => {
      state.number += payload;
    },
    Dec: (state, { payload }: { payload: number }) => {
      if (state.number > 0) {
        state.number -= payload;
      }
    },
    BuyPlus: (state, { payload }: { payload: number }) => {
      let copy = [...state.SavedList];
      copy[payload].number = copy[payload].number + 1;
      state.SavedList = copy;
    },
    BuyDec: (state, { payload }: { payload: number }) => {
      let copy = [...state.SavedList];
      if (copy[payload].number > 0) {
        copy[payload].number = copy[payload].number - 1;
        state.SavedList = copy;
      }
    },
    AddToSavedList: (state, { payload }: { payload: SavedTypes }) => {
      let savedItem = [...state.SavedList];
      savedItem.push(payload);
      state.SavedList = savedItem;
    },
    DeleteItem: (state, { payload }: { payload: any }) => {
      let removedList = state.SavedList.filter((elem) => elem.id !== payload);
      state.SavedList = removedList;
    },
  },
});

export const {
  Plus,
  Dec,
  BuyPlus,
  BuyDec,
  GetData,
  AddToSavedList,
  DeleteItem,
} = shopReducer.actions;
export default shopReducer.reducer;
