"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LuckyAlphabet = void 0;
var LuckyAlphabet = exports.LuckyAlphabet = function LuckyAlphabet(props) {
  if (typeof props !== "string" || props.length === 0) {
    return "Invalid input";
  }
  var randomIndex = Math.floor(Math.random() * props.length);
  return props[randomIndex];
};
module.exports = LuckyAlphabet;