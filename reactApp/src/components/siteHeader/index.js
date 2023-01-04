import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorMovie, setAnchorMovie] = useState(null);
  const [anchorActor, setAnchorActor] = useState(null);
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [anchorTvShow, setAnchorTvShow] = useState(null);

  const openMovie = Boolean(anchorMovie);
  const openActor = Boolean(anchorActor);
  const openTvShow = Boolean(anchorTvShow);
  const open = Boolean(anchorMenu);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();


//  Categorish the menu with a drop down
  const movieOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming"},
    { label: "Favourites", path: "/movies/favourites"},
    { label: "Must Watch", path: "/movies/playlist"},
    { label: "Top Rated", path: "/movies/top_movies"},
    { label: "Playing Now", path: "/movies/now_playing"},

  ];

  const actorOptions = [
    { label: "Actors", path: "/actors" },
    ];

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming"},
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Must Watch", path: "/movies/playlist" },
    { label: "Actors", path: "/actors" },
    { label: "Favourite Actors", path: "/actors/favourites" },
    { label: "Login", path:"/login"},
    { label: "SignUp", path:"/signup"}
  ];

  const tvShowOptions = [
    {label: "Tv Shows", path: "/tv_shows"},
    {label: "Top Rated", path: "/tv_shows/top_tv"},
    {label: "Airing Today", path: "/tv_shows/airing_today"},
  ];
  

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenuMovie = (event) => {
    setAnchorMovie(event.currentTarget);
  };

  const handleMenuActor = (event) => {
    setAnchorActor(event.currentTarget);
  };

  const handleMenu= (event) => {
    setAnchorMenu(event.currentTarget);
  };
  
  const handleMenuTvShow= (event) => {
    setAnchorTvShow(event.currentTarget);
  };
  

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Mary's App
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies, Actors and TvShows!
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorMenu(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
              <Button
                id="movie-menu"
                aria-controls="movie-menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuMovie}
                color="inherit">
                  Movies
              </Button>
              <Menu
              id="movie-menu-appbar"
              anchorEl={anchorMovie}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openMovie}
              onClose={() => setAnchorMovie(null)}>
                {movieOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
              </Menu>
              <Button
                id="actor-menu"
                aria-controls="actor-menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuActor}
                color="inherit">
                  Actors
              </Button>
              <Menu
              id="actor-menu-appbar"
              anchorEl={anchorActor}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openActor}
              onClose={() => setAnchorActor(null)}>
                {actorOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
              </Menu>
              <Button
                id="tvshow"
                aria-controls="tv-menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuTvShow}
                color="inherit">
                  TV Show
              </Button>
              <Menu
              id="tv-menu-appbar"
              anchorEl={anchorTvShow}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openTvShow}
              onClose={() => setAnchorTvShow(null)}>
                {tvShowOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
              </Menu>
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;