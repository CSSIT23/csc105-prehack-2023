import { Box } from "@mui/material";
import { createContext, useCallback, useState } from "react";
import { toast } from "react-hot-toast";
export const accounts = [
  {
    id: 1,
    avatar: `https://api.dicebear.com/6.x/fun-emoji/svg?seed=bronystylecrazy`,
    username: "bronystylecrazy",
    email: "bronystylecrazy@gmail.com",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    avatar: "https://api.dicebear.com/6.x/fun-emoji/svg?seed=bsthun",
    username: `bsthun`,
    email: "bsthun@gmail.com",
    createdAt: new Date().toISOString(),
  },
];

function findUserById(id) {
  return accounts.find((account) => account.id == id);
}

export const USER_ID = localStorage.getItem("user_id") ?? 1;

export const AuthContext = createContext({
  user: findUserById(USER_ID),
  switchAccount: (id) => {},
  accounts,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(findUserById(USER_ID));
  const switchAccount = useCallback((id) => {
    const foundUser = findUserById(id);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user_id", foundUser.id);
      toast.success(
        <Box sx={{ display: "flex", gap: 0.5 }}>
          Welcome<b>{foundUser.username}</b>
        </Box>
      );
      return;
    }
    return toast.error(
      <Box sx={{ display: "flex", gap: 0.5 }}>
        No valid user <b>#{id}</b>
      </Box>
    );
  }, []);

  return (
    <AuthContext.Provider value={{ user, switchAccount, accounts }}>
      {children}
    </AuthContext.Provider>
  );
};
