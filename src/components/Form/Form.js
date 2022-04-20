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
exports.Form = void 0;
const react_1 = __importStar(require("react"));
const nanoid_1 = require("nanoid");
const MessageList_1 = require("../MessageList/MessageList");
const Button_1 = require("../Button/Button");
require("./Form.css");
const Form = () => {
    const [message, setValue] = (0, react_1.useState)('');
    const [username, setUsername] = (0, react_1.useState)('');
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [disabled, setDisabled] = (0, react_1.useState)(false);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setMessages([...messages, { id: (0, nanoid_1.nanoid)(), username: username, message: message }]);
        setValue('');
    };
    (0, react_1.useEffect)(() => {
        if (messages.length &&
            messages[messages.length - 1].username != 'Chatbot') {
            setDisabled(!disabled);
            const botTimeout = setTimeout(() => {
                setMessages([
                    ...messages,
                    { id: (0, nanoid_1.nanoid)(), username: 'Chatbot', message: 'Hello from Chatbot!' },
                ]);
            }, 1500);
            return () => {
                clearTimeout(botTimeout);
            };
        }
        if (disabled)
            setDisabled(!disabled);
    }, [messages]);
    return (react_1.default.createElement("form", { onSubmit: handleSubmitForm },
        react_1.default.createElement(MessageList_1.MessageList, { messages: messages }),
        react_1.default.createElement("input", { className: "inputusername", "data-testid": "inputusername", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F...", type: "text", value: username, onChange: (e) => setUsername(e.target.value) }),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("textarea", { className: "inputmessage", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442...", value: message, onChange: (e) => setValue(e.target.value) }),
        react_1.default.createElement("br", null),
        react_1.default.createElement(Button_1.Button, { disabled: disabled })));
};
exports.Form = Form;
