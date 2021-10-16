import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerButton, ContainerDescription, ContainerHeader, ContainerImage, ContainerName, ContainerPrice, Image } from './itemStyled'


export const Item = ({ id, price, description, name, img, category }) => {
  return (
    <>

      <ContainerImage key={id}>
        <Link to={`/item/${id}`}>
          <Image src={img} />
        </Link>
        <ContainerHeader >
          <ContainerName>{name}</ContainerName>
          <ContainerDescription>{description}</ContainerDescription>
          <ContainerPrice>Price : $ {price}</ContainerPrice>
          <ContainerPrice>Categoria :  {category}</ContainerPrice>
          <ContainerButton>Add to card</ContainerButton>
        </ContainerHeader>
      </ContainerImage>
    </>
  )
}
