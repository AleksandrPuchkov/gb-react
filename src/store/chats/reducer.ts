import { nanoid } from "nanoid"
import { Reducer } from "redux"
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from "./actions"
import { ChatsActions } from "./types"

export interface Message {
    id: string,
    username: string,
    message: string
}

export interface ChatsState {
    [key: string]: Message[]
}

const initialState: ChatsState = {
    gb: [
        {
            id: '1',
            username: 'Username',
            message: 'Hello geekbrains'
        }
    ]
}

export const chatReducer: Reducer<ChatsState, ChatsActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.chatName]: []
            }
        }
        case DELETE_CHAT: {
            const chats = { ...state }
            delete chats[action.chatId]
            return chats
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.chatId]: [
                    ...state[action.chatId],
                    {
                        id: nanoid(),
                        username: 'Username',
                        message: action.message
                    }
                ]
            }

        }
        default:
            return state;
    }
}