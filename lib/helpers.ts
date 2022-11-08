export const capitalize = (str: string): string => {
  const words = str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1))

  return words.join(" ");
};
