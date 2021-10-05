import React from 'react'
import { ContainerButton, ContainerDescription, ContainerHeader, ContainerImage, ContainerName, ContainerPrice, Image } from './itemStyled'

export const Item = ({ id, price, description, name, img }) => {
  return (
    <>

      <ContainerImage className="card_img">
        <Image src={img} />
        <ContainerHeader >
          <ContainerName>{name}</ContainerName>
          <ContainerDescription>{description}</ContainerDescription>
          <ContainerPrice>Price : $ {price}</ContainerPrice>
          <ContainerButton>Add to card</ContainerButton>
        </ContainerHeader>
      </ContainerImage>
    </>
  )
}
