import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { orderProduct } from '../../helper/orderProducts';
import { ItemList } from './ItemList';
import { LoadingComponent } from '../Navbar/LoadingComponent';


export const ItemListContainer = () => {


  const [beer, setBeer] = useState([])
  const [loading, setLoading] = useState(false)

  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true)
    orderProduct()
      .then((res) => {
        if (categoryId) {
          setBeer(res.filter(prod => prod.category === categoryId))
        } else {
          setBeer(res)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  return (
    <>
      {loading ? <LoadingComponent /> : <ItemList beer={beer} />}
    </>
  );
}