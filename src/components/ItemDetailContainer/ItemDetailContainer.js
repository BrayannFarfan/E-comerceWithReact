import React, { useState, useEffect, useContext } from 'react'
import { ItemDetail } from './ItemDetail'
import { LoadingComponent } from '../Navbar/LoadingComponent'
import { useParams } from 'react-router'
import { getFirestore } from '../../config/config'
import { UIContext } from '../../context/UIContext'

export const ItemDetailContainer = () => {


  const [item, setItem] = useState(null)
  // const [loading, setLoading] = useState(false)

  const { loading, setLoading} = useContext(UIContext)


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

  },[itemId , setLoading])
  return (
    <>
      {loading ? <LoadingComponent /> : <ItemDetail {...item} />}
    </>
  )
}
