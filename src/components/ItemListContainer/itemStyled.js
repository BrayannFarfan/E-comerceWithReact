import styled from "styled-components";


export const ContainerImage = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.75);
`;

export const ContainerHeader = styled.div`
padding: 15px;
`;

export const ContainerName = styled.h2`
font-size: 1.3em;
text-align: center;
color:#ad9a3b;
`;


export const ContainerDescription = styled.p`
padding: 10px;
color: #333;
width: 200px
`;

export const ContainerPrice = styled.p`
padding: 10px;
color: #000;
`;

export const ContainerButton = styled.button`
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase ;
  transition: 1s;
  background: #ad9a3b;
  color:#fff;
  border: 2px solid #ad9a3b;
  font-weight: bold;
  
  
  
  :hover{
    color: #000;
    transition: 1s;
    background: transparent;

  }
`;

export const Image = styled.img`
`;