import styled from "styled-components";


export const ContainerLoading = styled.div`
   margin: 0;
   padding:0;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
 `;


export const ContentLoading = styled.div`
  width: 5em;
  height: 8em;
  border: 5px solid black;
  border-radius: 0.5em;
  position: relative; 

  ::after{
    content: '';
    width: 1em;
    height: 60%;
    border: 5px solid black;
    border-radius: 0.5em;
    position: absolute;
    top: 15%;
    left: 100%;
  }
`;

export const Loading = styled.div`
  position: absolute;
  // background: linear-gradient(rgb(245, 245, 220), rgb(255, 221, 64) 50%);
  background: linear-gradient(rgb(0, 0, 0), rgb(255, 221, 64) 50%);
  bottom: 5%;
  left: 5%;
  width: 90%;
  height: 105%;
  animation: load 3s infinite;
  transform-origin: center bottom;

  @keyframes load{
    from{
      transform: scaleY(0);
    }
    50%, to{
      transform: scaleY(1);
      border-radius: 50% 50% 0 0/ 10%;
    }
  }
  
  .beer::before{
    content: '';
    position: absolute;
    top: 0;
    left: 20%;
    width: 20%;
    height: 90%;
    border-radius: 10%;
    background-color: rgba(245, 245, 220, 0.4);
    animation: load2 3s infinite;
    transform-origin: center top;
  }
  
  @keyframes load2{
    from, 50%{
      transform: scaleY(0);
    }
    to{
      transform: scaleY(1);
      border-radius: 50% 50% 0 0/ 10%;
    }
  }

`;

