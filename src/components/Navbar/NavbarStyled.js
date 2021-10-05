import styled from "styled-components";

export const NavContainer = styled.div`
width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99;
background-color: #184D47;
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.47);
`;

export const NavContent = styled.div`
margin: auto;
width: 100%;
height: 100%;
max-width: 1200px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
`;

export const LogoIcon = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-size: 1.5rem;
color: #FAEEE0;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
export const MenuItems = styled.li`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 1.2rem 1.5rem;
font-size: 1rem;

&:hover{
  background-color: #183b37; 
  transition: 0.8s;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
}
`;
export const MenuItemsLink = styled.a`
text-decoration: none;
color: #FAEEE0; 
cursor: pointer;

`;