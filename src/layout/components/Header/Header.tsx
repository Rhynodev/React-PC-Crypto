import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Grid,
  useTheme,
  Container,
  Box,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import i18n from "../../../../src/components/pages/i18n";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
// import { useDispatch, } from "react-redux";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import "./index.scss";
interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 75,
  height: 36,
  padding: 4,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      transform: "translateX(38px)", // Adjust transform value to center the thumb when checked
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        background: theme.palette.primary.light,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    background: theme.palette.primary.main,
    width: 34,
    height: 34,
    margin: 1, // Ensure no extra margin is applied
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    background: theme.palette.primary.light,
    borderRadius: 18, // Ensuring the border radius matches half the height
  },
}));

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [marketAnchorEl, setMarketAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [tradeAnchorEl, setTradeAnchorEl] = useState<null | HTMLElement>(null);
  const [earnAnchorEl, setEarnAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:767px)");
  const handleMenuClose1 = () => {
    setMarketAnchorEl(null);
  };
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setMarketAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setMarketAnchorEl(null);
  };

  const changeLangm = (l: any) => {
    localStorage.setItem("lang", l);
    // dispatch({
    //   type: "CHANGE_LANGUAGE",
    //   payload: l,
    // });

    i18n.changeLanguage(l);
    return () => {
      i18n.changeLanguage(l);
    };
  };

  const handleClicklang = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };
  const handleCloselang = () => {
    setLanguageAnchorEl(null);
  };
  const handleMenuCloselang = () => {
    setLanguageAnchorEl(null);
  };
  const handleMenuClose2 = () => {
    setTradeAnchorEl(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setTradeAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setTradeAnchorEl(null);
  };
  const handleMenuClose3 = () => {
    setEarnAnchorEl(null);
  };
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setEarnAnchorEl(event.currentTarget);
  };
  const handleClose3 = () => {
    setEarnAnchorEl(null);
  };
  // const dispatch = useDispatch();
  const [state, setState] = React.useState({
    right: false,
  });
  const [openOption1, setOpenOption1] = React.useState(false);
  const [openOption2, setOpenOption2] = React.useState(false);
  const [openOption3, setOpenOption3] = React.useState(false);
  const [lang, setLang] = useState("en");
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ right: open });
    };

  const handleClickOption1 = () => {
    setOpenOption1(!openOption1);
  };

  const handleClickOption2 = () => {
    setOpenOption2(!openOption2);
  };
  const handleClickOption3 = () => {
    setOpenOption3(!openOption3);
  };
  const languageShortCode = "en";
  const storeLanguage =
    typeof window !== "undefined" ? window.localStorage.getItem("lang") : false;
  useEffect(() => {
    changeLangm(storeLanguage != undefined ? storeLanguage : languageShortCode);
  }, [lang]);

  const handleLanguageChange = (language: any) => {
    console.log("event.target.value", language);
    handleCloselang();
    setLang(language);
    // const cur_id = process.env.cur_id;
    //const lang_id_new = convertLangCodeToID(event.target.value);
    changeLangm(language);
    //dispatch(categoryListingTree(lang_id_new, cur_id));
  };
  console.log("event.target.value", lang);
  const handleLogin = () => {
    navigate("/login");
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <Grid
        item
        className="flex align-center justify-around pt-4 pb-4 gap-2 pl-2 pr-2"
      >
        <Button
          variant="outlined"
          size="small"
          className="w-full"
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            minWidth: "auto",
            "&:hover": {
              background: theme.palette.primary.main,
              border: "none",
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="contained"
          size="small"
          className="w-full"
          sx={{
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            minWidth: "auto",
            "&:hover": {
              background: theme.palette.primary.main,
              border: "none",
            },
          }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Grid>
      <Divider />
      <List sx={{ padding: "0px 0px" }}>
        <ListItemButton
          onClick={handleClickOption1}
          component={Link}
          to="/market"
        >
          <ListItemText
            primary="Market"
            sx={{ color: theme.palette.primary.light }}
          />
          {openOption1 ? (
            <ExpandLess sx={{ color: theme.palette.primary.light }} />
          ) : (
            <ExpandMore sx={{ color: theme.palette.primary.light }} />
          )}
        </ListItemButton>
        <Collapse in={openOption1} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary="Market 1"
                  sx={{ color: theme.palette.primary.light }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary="Market 2"
                  sx={{ color: theme.palette.primary.light }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItemButton
          onClick={handleClickOption2}
          component={Link}
          to="/trade"
        >
          <ListItemText
            primary="Trade"
            sx={{ color: theme.palette.primary.light }}
          />
          {openOption2 ? (
            <ExpandLess sx={{ color: theme.palette.primary.light }} />
          ) : (
            <ExpandMore sx={{ color: theme.palette.primary.light }} />
          )}
        </ListItemButton>
        <Collapse in={openOption2} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary="Trade 1"
                  sx={{ color: theme.palette.primary.light }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary="Trade 2"
                  sx={{ color: theme.palette.primary.light }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItemButton
          onClick={handleClickOption3}
          component={Link}
          to="/earn"
        >
          <ListItemText
            primary="Earn"
            sx={{ color: theme.palette.primary.light }}
          />
          {openOption3 ? (
            <ExpandLess sx={{ color: theme.palette.primary.light }} />
          ) : (
            <ExpandMore sx={{ color: theme.palette.primary.light }} />
          )}
        </ListItemButton>
        <Collapse in={openOption3} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary="Earn 1"
                  sx={{ color: theme.palette.primary.light }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary="Earn 2"
                  sx={{ color: theme.palette.primary.light }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="About"
              sx={{ color: theme.palette.primary.light }}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Career"
              sx={{ color: theme.palette.primary.light }}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      <Divider />
      <Grid
        item
        className="flex align-center justify-around pt-1 pb-1 gap-1 pl-2 pr-2"
      >
        <IconButton sx={{ color: theme.palette.primary.light }}>
          <DownloadIcon />
        </IconButton>
        <IconButton sx={{ color: theme.palette.primary.light }}>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton sx={{ color: theme.palette.primary.light }}>
          <LanguageIcon />
        </IconButton>
      </Grid>
    </Box>
  );

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <AppBar
      className="WebApp"
      position="sticky"
      sx={{
        background: theme.palette.background.paper,
        boxShadow: "0px 2px 3px 0px #00000040",
        backdropFilter: "blur(4px)",
        marginBottom: "10px",
      }}
      elevation={0}
    >
      <Container maxWidth="xl" className="p-0 m-0 pl-0 pr-0">
        <Toolbar
          sx={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            padding: "0px !important",
            minHeight: {
              xs: "70px !important",
              sm: "70px !important",
              md: "135px !important",
              lg: "135px !important",
            },
          }}
        >
          <Grid
            className="justcheck"
            container
            alignItems="center"
            sx={{ justifyContent: matches ? "space-between" : "" }}
          >
            <Grid item xs={4} md={2} lg={1}>
              <Typography
                variant="h6"
                className="!text-2xl !font-semibold"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.secondary.contrastText,
                }}
              >
                <Link to="/">Crypto</Link>
              </Typography>
            </Grid>
            {!matches && (
              <Grid item xs={4} md={6} lg={8} className="flex justify-center">
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Button
                    aria-controls="market-menu"
                    aria-haspopup="true"
                    variant="outlined"
                    component={Link}
                    to="/market"
                    sx={{
                      border: "none",
                      color: theme.palette.primary.light,
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "400",
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "none",
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: "0px",
                      },
                    }}
                    onClick={handleClick1}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {t("web_market")}
                  </Button>
                  <Menu
                    id="market-menu"
                    anchorEl={marketAnchorEl}
                    keepMounted
                    open={Boolean(marketAnchorEl)}
                    onClose={handleMenuClose1}
                  >
                    <MenuItem
                      component={Link}
                      to="/market"
                      onClick={handleClose1}
                      disableRipple
                      sx={{ color: theme.palette.primary.light }}
                    >
                      Market 1
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/market"
                      onClick={handleClose1}
                      disableRipple
                      sx={{ color: theme.palette.primary.light }}
                    >
                      Market 2
                    </MenuItem>
                  </Menu>
                  <Button
                    aria-controls="trade-menu"
                    aria-haspopup="true"
                    variant="outlined"
                    component={Link}
                    to="/trade"
                    sx={{
                      border: "none",
                      color: theme.palette.primary.light,
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "400",
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "none",
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: "0px",
                      },
                    }}
                    onClick={handleClick2}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {t("web_trade")}
                  </Button>
                  <Menu
                    id="trade-menu"
                    anchorEl={tradeAnchorEl}
                    keepMounted
                    open={Boolean(tradeAnchorEl)}
                    onClose={handleMenuClose2}
                  >
                    <MenuItem
                      component={Link}
                      to="/trade"
                      onClick={handleClose2}
                      disableRipple
                      sx={{ color: theme.palette.primary.light }}
                    >
                      Trade 1
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/trade"
                      onClick={handleClose2}
                      disableRipple
                      sx={{ color: theme.palette.primary.light }}
                    >
                      {t("Trade 1")}
                    </MenuItem>
                  </Menu>
                  <Button
                    aria-controls="earn-menu"
                    aria-haspopup="true"
                    variant="outlined"
                    component={Link}
                    to="/wallet"
                    sx={{
                      border: "none",
                      color: theme.palette.primary.light,
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "400",
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "none",
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: "0px",
                      },
                    }}
                    onClick={handleClick3}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {t("web_earn")}
                  </Button>
                  <Menu
                    id="earn-menu"
                    anchorEl={earnAnchorEl}
                    keepMounted
                    open={Boolean(earnAnchorEl)}
                    onClose={handleMenuClose3}
                  >
                    <MenuItem
                      component={Link}
                      to="/wallet"
                      onClick={handleClose3}
                      disableRipple
                      sx={{ color: theme.palette.primary.light }}
                    >
                      Earn 1
                    </MenuItem>
                  </Menu>
                  <Button
                    sx={{
                      border: "none",
                      color: theme.palette.primary.light,
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "400",
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "none",
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: "0px",
                      },
                    }}
                    component={Link}
                    to="/about"
                  >
                    {t("web_about")}
                  </Button>
                  <Button
                    sx={{
                      border: "none",
                      color: theme.palette.primary.light,
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "400",
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "none",
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: "0px",
                      },
                    }}
                  >
                    {t("web_career")}
                  </Button>
                </Box>
              </Grid>
            )}
            {!matches && (
              <Grid
                item
                xs={4}
                md={4}
                lg={3}
                className="flex justify-end items-center"
              >
                <MaterialUISwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <Button
                  variant="contained"
                  className="!text-lg"
                  sx={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    textTransform: "capitalize",
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    minWidth: "140px",
                    padding: "10px 16px",
                    "&:hover": {
                      background: theme.palette.primary.main,
                      border: "none",
                    },
                  }}
                  onClick={handleRegister}
                >
                  Register
                </Button>

                <IconButton sx={{ color: theme.palette.primary.light }}>
                  <DownloadIcon />
                </IconButton>
                <IconButton sx={{ color: theme.palette.primary.light }}>
                  <NotificationsActiveIcon />
                </IconButton>
                <IconButton
                  sx={{ color: theme.palette.primary.light }}
                  onClick={handleClicklang}
                >
                  <LanguageIcon />
                </IconButton>
                <Menu
                  id="language-menu"
                  anchorEl={languageAnchorEl}
                  keepMounted
                  open={Boolean(languageAnchorEl)}
                  onClose={handleMenuCloselang}
                >
                  <MenuItem
                    value="en"
                    sx={{ color: theme.palette.primary.light }}
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleLanguageChange("kh")}
                    value="kh"
                    sx={{ color: theme.palette.primary.light }}
                  >
                    ខ្មែរ
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleLanguageChange("ch")}
                    value="kh"
                    sx={{ color: theme.palette.primary.light }}
                  >
                    中文
                  </MenuItem>
                </Menu>
              </Grid>
            )}
            {matches && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{
                  background: "#1DA1F2",
                  "&:hover": {
                    background: "#1DA1F2", // Replace this with the correct color code
                  },
                }}
                onClick={toggleDrawer(true)}
                // sx={{ ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Grid>
        </Toolbar>
      </Container>

      {/* right sdie drawer start */}
      {matches && (
        <SwipeableDrawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      )}
      {/* right sdie drawer end */}
    </AppBar>
  );
};

export default Header;
