import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { LoadingComponent } from '../Navbar/LoadingComponent'
import { useParams } from 'react-router'
import { getFirestore } from '../../config/config'

export const ItemDetailContainer = () => {


  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(false)


  const { itemId } = useParams()


  useEffect(() => {
    setLoading(true)

    const db = getFirestore()
    const productos = db.collection('productos')
    const item = productos.doc(itemId)

    item.get()
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data()
        })
      })
      .catch((err) => console.log(err))
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
