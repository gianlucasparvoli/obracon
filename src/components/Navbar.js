/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/obracon-logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const menuOptions = [
    { text: "Inicio", icon: <HomeIcon />, path: "/" },
    { text: "Quienes Somos", icon: <InfoIcon />, path: "/about" },
    { text: "Proyectos", icon: <HomeWorkIcon />, path: "/projects" },
    { text: "Contacto", icon: <PhoneRoundedIcon />, path: "/contact" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100px", // Set navbar height
        backgroundColor: "#E3E1E2", // Solid white background (change as needed)
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow
        zIndex: "1000",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #ddd" // Optional border to define separation
      }}>
        <div className="nav-logo-container">
          <img src={Logo} alt="Obracon Logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
        </div>
        <div className="navbar-links-container mt-3">
          {menuOptions.map((item) => (
            <a key={item.text} style={{ fontSize: "22px", color: "#534D50", cursor: "pointer" }} onClick={() => navigate(item.path)}>
              {item.text}
            </a>
          ))}
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => navigate(item.path)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
