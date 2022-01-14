import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UIContext } from '../../context/UIContext';
import { ItemList } from './ItemList';
import { LoadingComponent } from '../Navbar/LoadingComponent';
import { getFirestore } from '../../config/config';


export const ItemListContainer = () => {


  const [beer, setBeer] = useState([])

  const {loading, setLoading } = useContext(UIContext)


  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true)

    const db = getFirestore()
    const productos = categoryId ? db.collection('productos').where('category', '==', categoryId) : db.collection('productos')
    productos.get()
      .then((res) => {
        const newItem = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setBeer(newItem)
      }).catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })


  }, [categoryId, setLoading])

  return (
    <>
      {loading ? <LoadingComponent /> : <ItemList beer={beer} />}
    </>
  );
}