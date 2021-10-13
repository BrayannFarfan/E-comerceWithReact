import React from 'react'
import { Item } from './Item'
import { ContainerItem, Title } from './itemListStyled'

export const ItemList = ({ beer }) => {
  return (
    <>
      <Title>Productos</Title>
      <ContainerItem>
        {
          beer.map((item) => <Item {...item} key={item.id} />)
        }
      </ContainerItem>
    </>
  )
}
