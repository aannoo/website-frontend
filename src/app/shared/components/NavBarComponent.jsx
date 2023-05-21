import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Context from "../../stores/context";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import image from "../../../../src/assets/logo-redback.png";
import { useHistory } from "react-router-dom";

const NavBarComponent = () => {
  const { globalState, globalDispatch } = useContext(Context);
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    globalDispatch({ type: "LOGOUT" });
    sessionStorage.removeItem("username");
    history.push("/loginIn");
  };

  return (
    <Box sx={{ flexGrow: 1, overflowX: "hidden", overflowY: "hidden", padding: "0 25px" }}>
      <Toolbar disableGutters>
        <Typography
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <NavLink to="/">
            <div className="half-circle">
              <img className="logo" src={image} alt="img" />
            </div>
          </NavLink>
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" exact component={NavLink} to="/">
                Home
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                exact
                component={NavLink}
                to="/aboutUs"
              >
                About Us
              </Typography>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                exact
                component={NavLink}
                to="/ourTeam"
              >
                Our Team
              </Typography>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                exact
                component={NavLink}
                to="/ourProject"
              >
                Our Project
              </Typography>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                exact
                component={NavLink}
                to="/contactUs"
              >
                Contact Us
              </Typography>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                exact
                component={NavLink}
                to="/loginIn"
              >
                Login In
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <img className="logo1 circle" type="image" src={image} />
        </Typography>
        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none", color: "white" },
          }}
          exact
          component={NavLink}
          to="/"
        ></Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "black",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            exact
            component={NavLink}
            to="/"
          >
            Home
          </Button>
          <Button
            variant="text"
            sx={{
              color: "black",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            exact
            component={NavLink}
            to="/aboutUs"
          >
            About Us
          </Button>

          <Button
            variant="text"
            sx={{
              color: "black",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            exact
            component={NavLink}
            to="/ourTeam"
          >
            Our Team
          </Button>

          <Button
            variant="text"
            sx={{
              color: "black",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            exact
            component={NavLink}
            to="/ourProject"
          >
            Our Project
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "white",
              fontWeight: "bold",
              borderColor: "#E9624C",
              backgroundColor: "#E9624C",
              whiteSpace: "nowrap",
              borderRadius: "5px",
            }}
            exact
            component={NavLink}
            to="/contactUs"
          >
            Contact Us
          </Button>

          {globalState.isLoggedIn ? (
            <Button
              variant="text"
              sx={{
                color: "black",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
              exact
              component={NavLink}
              to="/login"
              onClick={handleLogout}
            >
              SignOut
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{
                color: "#E9624C",
                fontWeight: "bold",
                borderColor: "#E9624C",
                whiteSpace: "nowrap",
                backgroundColor: "transparent",
              }}
              exact
              component={NavLink}
              to="/loginIn"
            >
              SignIn
            </Button>
          )}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          ></Menu>
        </Box>
      </Toolbar>
      </Box>
  );
};

export default NavBarComponent;
