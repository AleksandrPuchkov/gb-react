import { compose } from "redux";

declare module '*.module.css'
declare module '*.module.scss'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export {}