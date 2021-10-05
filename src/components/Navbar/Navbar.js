import React from 'react'
import { LogoIcon, Menu, MenuItems, MenuItemsLink, NavContainer, NavContent } from './NavbarStyled'
import { GiBeerStein } from "react-icons/gi";
import { CartWidgle } from '../CartWidget/CartWidget';

export const Navbar = () => {

  return (
    <>
      <NavContainer>
        <NavContent>
          <LogoIcon>
            <GiBeerStein size={"2em"} />CerMark
          </LogoIcon>
          <Menu>
            <MenuItems>
              <MenuItemsLink>HOME</MenuItemsLink>
            </MenuItems>
            <MenuItems>
              <MenuItemsLink>PRODUCTS</MenuItemsLink>
            </MenuItems>
            <MenuItems>
              <MenuItemsLink>CONTACT</MenuItemsLink>
            </MenuItems>
            <MenuItems>
              <MenuItemsLink><CartWidgle /></MenuItemsLink>
            </MenuItems>
          </Menu>
        </NavContent>
      </NavContainer>
    </>
  )
}
