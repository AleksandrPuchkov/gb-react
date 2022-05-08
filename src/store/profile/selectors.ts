import { StoreState } from "..";

export const selectVisible = (state: StoreState)  => state.profile.visible
export const selectname = (state: StoreState)  => state.profile.name