"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const Form_1 = require("./components/Form/Form");
require("./App.css");
const App = () => {
    return react_1.default.createElement(Form_1.Form, null);
};
exports.App = App;
