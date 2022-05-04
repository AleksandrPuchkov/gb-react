import { Reducer, Action } from "redux";
import { CHANGE_NAME, TOGGLE_PROFILE } from "./actions";
import { ProfileActions } from "./types";

export interface ProfileState {
    visible: boolean;
    name: string;
}

const initialState = {
    visible: true,
    name: 'default'
}

export const profileReducer: Reducer<ProfileState, ProfileActions> = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PROFILE: {
            return {
                ...state,
                visible: !state.visible
            }
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.name
            }
        }
        default: return state
    }
}