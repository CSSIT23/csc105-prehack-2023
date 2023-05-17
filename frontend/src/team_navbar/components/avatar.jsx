import React, { useContext } from "react";
import { AuthContext } from "../../share/context/auth";
import {
  Avatar,
  List,
  ListItemButton,
  Popover,
  Typography,
} from "@mui/material";
import { toast } from "react-hot-toast";

export default function Avatar$() {
  const { user, accounts, switchAccount } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Avatar
        src={user?.avatar}
        aria-describedby={id}
        sx={{
          border: "2px solid black",
          cursor: "pointer",
          width: "24px",
          height: "24px",
        }}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List sx={{ background: "rgba(0,0,0)", color: "white" }}>
          {accounts.map((account) => (
            <ListItemButton
              sx={{
                background: "rgba(0,0,0)",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
              onClick={() => {
                switchAccount(account.id);
                handleClose();
              }}
            >
              <Avatar
                src={account?.avatar}
                sx={{ width: "24px", height: "24px" }}
              />
              {account?.username}
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </>
  );
}
