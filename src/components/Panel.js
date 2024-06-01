"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function Panel(props) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-zinc-100 p-3 rounded-lg " + props.className, children: props.children }));
}
exports.default = Panel;
