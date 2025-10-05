import { NavLink, Navigate } from "react-router-dom";
import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import crossMarkImg from "../assets/cross-mark.png";
import Logout from "@mui/icons-material/Logout";
import { useContext } from "react";
import GeneralContext from "./GeneralContext/GeneralContext";
const TopMenu = () => {
  const { userData, handleLogout } = useContext(GeneralContext);

  //profile functions

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-container">
      <img src={crossMarkImg} className="w-7 " />
      <div className="menus">
        <NavLink
          to={"/tradeX"}
          end
          className={({ isActive }) => (isActive ? "menu selected" : "menu")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to={"/tradeX/orders"}
          className={({ isActive }) => (isActive ? "menu selected" : "menu")}
        >
          Orders
        </NavLink>

        <NavLink
          to={"/tradeX/holdings"}
          className={({ isActive }) => (isActive ? "menu selected" : "menu")}
        >
          Holdings
        </NavLink>

        <NavLink
          to={"/tradeX/positions"}
          className={({ isActive }) => (isActive ? "menu selected" : "menu")}
        >
          Positions
        </NavLink>

        <NavLink
          to={"/tradeX/funds"}
          className={({ isActive }) => (isActive ? "menu selected" : "menu")}
        >
          Funds
        </NavLink>

        <NavLink
          to={"apps"}
          className={({ isActive }) => (isActive ? "menu selected" : "menu")}
        >
          Apps
        </NavLink>

        <Fragment>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}
                >
                  {userData && userData.username ? userData.username[0] : ""}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar />{" "}
              {userData && userData.username ? userData.username : ""}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Fragment>
      </div>
    </div>
  );
};

export default TopMenu;
