const capitalize = (string) => {
  const firstLetter = string.at(0);
  return `${firstLetter.toUpperCase()}${string.slice(0)}`;
};

export default capitalize;
