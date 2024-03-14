export const LuckyAlphabet = (props) => {
  if (typeof props !== "string" || props.length === 0) {
    return "Invalid input";
  }

  const randomIndex = Math.floor(Math.random() * props.length);

  return props[randomIndex];
};

module.exports = LuckyAlphabet;
