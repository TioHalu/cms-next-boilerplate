export const generateInitial = (text?: string) => {
  const [text1, text2] = (text ?? "Admin")
    .trim()
    .split(" ")
    .map((str) => str.trim());
  if (text2) {
    return `${text1!.charAt(0).toUpperCase()}${text2.charAt(0).toUpperCase()}`;
  }
  if (text1!.length > 1) {
    return `${text1!.charAt(0).toUpperCase()}${text1!.charAt(1).toUpperCase()}`;
  }
  return text1!.charAt(0).toUpperCase();
};
