export const generatePassword = (length = 12) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]:;'<>?,./|";
  let passowrd = "";
  for (let i = 0, n = charset.length; i < length; i++) {
    passowrd += charset.charAt(Math.floor(Math.random() * n));
  }
  return passowrd;
};
