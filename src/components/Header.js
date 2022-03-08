import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Button
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const Header = (props) => {
    const { history } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const isMobile = useMediaQuery(("xs"));


    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
        //setAnchorEl(null);
    };

    const handleButtonClick = (pageURL) => {
        history.push(pageURL);
    };


    const menuItems = [
        {
            menuTitle: "Home",
            pageURL: "/"
        },
        {
            menuTitle: "New Questions",
            pageURL: "/new"
        },
        {
            menuTitle: "Leaderboard",
            pageURL: "/Leaderboard"
        }
    ];
    return (
        <div className="">
            <AppBar position="static">
                <Toolbar>
                    {isMobile ? (
                        <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuClick}
                        >

                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                        >
                            {menuItems.map((menuItem) => {
                                const { menuTitle, pageURL } = menuItem;
                                return (
                                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                                        {menuTitle}
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                        </>
                    ) : (
                        <div className="headerOptions">
                            <a

                                onClick={() => handleButtonClick("/")}
                            >
                                HOME
                            </a>
                            <a

                                onClick={() => handleButtonClick("/contact")}
                            >
                                New Questions
                            </a>
                            <a

                                onClick={() => handleButtonClick("/about")}
                            >
                                Leader Board
                            </a>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>


    )
}
export default Header;
