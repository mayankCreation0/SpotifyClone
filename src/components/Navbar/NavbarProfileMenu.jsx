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
  const premium = () => {
    window.open("https://www.spotify.com/us/premium/", "_self");
  };
  const Setting = () => {
    window.open("https://open.spotify.com/preferences", "_self");
  };

  return open ? (
    <ProfileMenuContainer>
      <ProfileMenuLink href="https://open.spotify.com" target="_blank">
        Profile
      </ProfileMenuLink>
      <ProfileMenuLink onClick={premium}>
        Upgrade to Premium
      </ProfileMenuLink>
      <ProfileMenuLink onClick={Setting}>
        Setting
      </ProfileMenuLink>
      <ProfileMenuLink onClick={logout}>
        Logout
      </ProfileMenuLink>
    </ProfileMenuContainer>
  ) : null;
};

export default NavbarProfileMenu;
