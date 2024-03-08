export const generateUniqueKey = (): string => {
  // Generate a random number and convert it to a string
  return Math.random().toString(36).substring(2)
}
