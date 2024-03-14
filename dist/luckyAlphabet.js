"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LuckyAlphabet = void 0;
const LuckyAlphabet = props => {
  if (typeof props !== "string" || props.length === 0) {
    return "Invalid input";
  }
  const randomIndex = Math.floor(Math.random() * props.length);
  return props[randomIndex];
};
exports.LuckyAlphabet = LuckyAlphabet;
module.exports = LuckyAlphabet;