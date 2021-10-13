import React, { useState, useEffect } from 'react'
import { orderProduct } from '../../helper/orderProducts'
import { ItemDetail } from '../../components/ItemDetailContainer/ItemDetail'
import { LoadingComponent } from '../Navbar/LoadingComponent'
import { useParams } from 'react-router'

export const ItemDetailContainer = () => {


  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(false)


  const { itemId } = useParams()


  useEffect(() => {
    setLoading(true)

    orderProduct()
      .then(res => {
        setItem(res.find(prod => prod.id === Number(itemId)))
      })
      .finally(() => {
        setLoading(false)
      })

  }, [itemId])
  return (
    <>
      {loading ? <LoadingComponent /> : <ItemDetail {...item} />}
    </>
  )
}
