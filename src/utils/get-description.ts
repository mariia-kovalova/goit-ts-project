const NUMBER_OF_CHARS = 38;

export const getDescription = (description: string) =>
  description.length <= NUMBER_OF_CHARS
    ? description
    : `${description.substring(0, NUMBER_OF_CHARS).trim()}...`;
