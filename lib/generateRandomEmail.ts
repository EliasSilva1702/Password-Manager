import { generateRandomUser } from "./generateRandomUser";

export const generateRandomEmail = () => {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
  const username = generateRandomUser(8);

  const domain = domains[Math.floor(Math.random() * domains.length)]; 

  return `${username}@${domain}`;
};
