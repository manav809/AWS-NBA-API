import { useRef } from "react";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Button from "@mui/material/Button";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
function Navbar() {
  const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  return (
    <header>
      <div>
        <SportsBasketballIcon fontSize="large"/>
      </div>
      <div>
        <nav ref={navRef}>
          <Link to="/">
            <Button variant="text" sx={{ color: "white" }} startIcon={<HomeIcon />}>
              Home
            </Button>
          </Link>
          <Link to="/Search">
            <Button variant="text" sx={{ color: "white" }} startIcon={<PersonSearchIcon />}>
              Search
            </Button>
          </Link>
          <Link to="/Documentation">
            <Button variant="text" sx={{ color: "white" }} startIcon={<ArticleIcon />}>
              Documentation
            </Button>
          </Link>
          {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button> */}
        </nav>
        {/* <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button> */}
      </div>
      <div>
        <Link to="https://github.com/manav809/AWS-NBA-API" target="_blank">
          <GitHubIcon fontSize="large" style={{color: "white"}}></GitHubIcon>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
