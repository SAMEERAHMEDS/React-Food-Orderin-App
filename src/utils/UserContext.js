import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sameer",
    email: "sameer@gmail.com",
  },
});

export default UserContext;
