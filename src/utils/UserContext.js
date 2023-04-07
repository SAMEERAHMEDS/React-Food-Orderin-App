import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sameer",
    email: "ahmedsameersr@gmail.com",
  },
});

export default UserContext;
