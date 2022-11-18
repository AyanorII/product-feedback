export const capitalize = (str: string): string => {
  if (str.length <= 2) {
    return str.toUpperCase();
  }

  const words = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());

  return words.join(" ");
};
