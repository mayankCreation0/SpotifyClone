import React from "react";
import {
  ProfileMenuContainer,
  ProfileMenuLink,
  ProfileMenuButton
} from "./navbarStyles";

const NavbarProfileMenu = ({ open }) => {
  const logout = () => {
    // const url = 'https://accounts.spotify.com/en/logout'
    window.open("https://accounts.spotify.com/en/logout", "_self")
  }
  // const google = () => {
  //   window.open("http://localhost:5000/auth/google", "_self");
  // };

  return open ? (
    <ProfileMenuContainer>
      <ProfileMenuLink href="https://open.spotify.com" target="_blank">
        Profile
      </ProfileMenuLink>
      <ProfileMenuLink onClick={logout}>
        Logout
      </ProfileMenuLink>
    </ProfileMenuContainer>
  ) : null;
};

export default NavbarProfileMenu;
