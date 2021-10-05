import styled from "styled-components";


export const ContainerImage = styled.div`

display: flex;
flex-direction:column;
`;

export const ContainerHeader = styled.div`
padding: 15px
`;

export const ContainerName = styled.h2`
font-size: 1.3em;
text-align: center;
color: #184D47;
`;


export const ContainerDescription = styled.p`
padding: 10px;
color: #333;
`;

export const ContainerPrice = styled.p`
padding: 10px;
color: red;
`;

export const ContainerButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: 1px solid #184D47;
  color: #184D47;
  text-transform: uppercase ;
  transition: 1s;


  :hover{
    background: #184D47;
    color: #fff;
    transition: 1s
  }
`;

export const Image = styled.img`
`;