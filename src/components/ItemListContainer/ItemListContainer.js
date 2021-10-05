import React, { useEffect, useState } from 'react';
import { orderProduct } from '../../helper/orderProducts';
import { ContainerLoading, ContentLoading, Loading } from '../Loading/loadingStyle';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {


  const [beer, setBeer] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    orderProduct()
      .then((res) => {
        setBeer(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })



  }, [])

  return (
    <>
      {
        loading ?
          <ContainerLoading>
            <ContentLoading>
              <Loading>

              </Loading>
            </ContentLoading>
          </ContainerLoading> :
          <ItemList beer={beer} />

      }
    </>
  );
}