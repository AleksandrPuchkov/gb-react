"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageList = void 0;
const react_1 = __importStar(require("react"));
require("./MessageList.css");
exports.MessageList = (0, react_1.memo)(({ messages }) => (react_1.default.createElement("ul", null, messages.map((message, idx) => {
    if (message.username === 'Chatbot')
        return (react_1.default.createElement("li", { key: idx, className: "message botmessage" },
            react_1.default.createElement("h3", { className: "botname" }, message.username),
            react_1.default.createElement("p", { className: "bottext" }, message.message)));
    else
        return (react_1.default.createElement("li", { key: idx, className: "message usermessage" },
            react_1.default.createElement("h3", { className: "username" }, message.username),
            react_1.default.createElement("p", { className: "usertext", "data-testid": "testmessage" }, message.message)));
}))));
