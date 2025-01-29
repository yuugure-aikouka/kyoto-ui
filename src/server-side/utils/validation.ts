export const validateNotBlank = (
  value: string | null | undefined,
  message: string
): void => {
  if (!value) {
    throw new Error(message);
  }
};
