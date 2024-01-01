import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import Avatar from "@mui/material/Avatar";
import Logo from "../Images/MyShop.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "../HomePage/NavBar.css";
function NavBar() {
  const [item, setItem] = useState(0);
  const navigate = useNavigate();
  const nextCart = () => {
    navigate("/cart");
  };
  return (
    <div className="nav">
      <div className="head">
        <div className="logo">
          <img src={Logo} alt="Error" style={{ width: 80, height: 80 }} />
        </div>
        <div className="search">
          <SearchIcon />
          <ReactSearchBox placeholder="Search for Products..." value="Doe" />
        </div>

        <div style={{ display: "inline-flex", gap: 10, marginTop: 25 }}>
          <Avatar sx={{ m: 1, bgcolor: "grey" }}></Avatar>
          <Avatar sx={{ m: 1, bgcolor: "grey" }}>
            <ShoppingCartIcon onClick={nextCart} />
            <p>{item}</p>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
