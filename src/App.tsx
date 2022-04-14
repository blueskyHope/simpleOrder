import './@fake-db';
import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from './store/orderSlice';
import { getFilteredProducts } from './store/productsSlice';
import { RootState, AppDispatch } from './store';

import Navbar from './components/Navbar';
import OrderTab from './components/OrderTab';
import OrderTable from './components/OrderTable';
import UpdateModal from './components/UpdateModal';
import { CM_TOP_CENTER } from './@types/constants';

import { AppContainer } from './App.style';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const order = useSelector((state: RootState) => state.orderState.order);
  const products = useSelector((state: RootState) => state.productsState.products);

  const [updateShow, setUpdateShow] = useState(false);
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    dispatch(getOrder());
    dispatch(getFilteredProducts('b'));
  }, [dispatch]);

  useEffect(() => {
    console.log(order);
  }, [order]);

  const closeUpdateModal = (value: boolean): void => {
    setUpdateShow(value);
  };

  const clickEditProduct = (id: number): void => {
    setProductId(id);
    setUpdateShow(true);
  };

  return (
    <>
      <AppContainer>
        <CssBaseline />
        <Navbar />
        <OrderTab />
        <OrderTable tableData={order?.products} clickEditProduct={clickEditProduct} />
      </AppContainer>
      {order && (
        <UpdateModal
          handleClose={closeUpdateModal}
          show={updateShow}
          openPos={CM_TOP_CENTER}
          product={order.products[productId]}
        />
      )}
    </>
  );
};

export default App;
