"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar2 = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ProgressStyles = _styledComponents.default.div`
  ${_ref => {
  let {
    progresss
  } = _ref;
  return (0, _styledComponents.css)`
    position: fixed;
    width: 100vw;
    /* background-color: transparent; */
    .progress-bar2 {
      position: absolute;
      background-color: pink;
      /* min-width: 50px; */
      max-width: 95%;
      height: 2px;
      top: 0;
      left: 0;
      background: linear-gradient(
        to right,
        red ${progresss}%,
        rgba(128, 128, 128, 0.5) ${progresss}%
      );
      transition: width 0.3s all;
      width: 100%;
      /* width: ${progresss}vw; */
      /* transition: width 0.3s; */
    }
    .progress-bar2 {
      height: 1px;
      width: 30px;
      background-color: pink;
    }
    .progress-percentage {
      background-color: white;
      text-align: center;
      position: absolute;
      top: 0;
      right: 2%;
      box-shadow: 0px 0px 10px 3px rgba(128, 128, 128, 0.5);
      width: 30px;
      height: 20px;
    }
  `;
}}
`;
const ProgressBar2 = () => {
  const [percentage, setPercentage] = (0, _react.useState)(0);
  console.log(percentage);
  const new_percentage = Math.floor(percentage);
  const handleScroll = () => {
    const {
      clientHeight,
      scrollTop,
      scrollHeight
    } = document.documentElement;
    const scrollToBottom = scrollHeight - clientHeight - scrollTop <= 100;
    console.log("clientHeight", clientHeight);
    console.log("scrollTop", scrollTop);
    console.log("scrollHeight", scrollHeight);
    console.log("scrollToBottom", scrollToBottom);
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight) * 100;
    setPercentage(scrollPercentage);
  };
  (0, _react.useEffect)(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(ProgressStyles, {
    progresss: percentage
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-percentage"
  }, new_percentage));
};
exports.ProgressBar2 = ProgressBar2;