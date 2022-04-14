import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import OrderTab from './components/OrderTab';
import Products from './components/Products';
import AddModal from './components/AddModal';
import { AppContainer } from './App.styles';

const App: React.FC = () => (
  <AppContainer>
    <CssBaseline />
    <Navbar />
    <OrderTab />
    <AddModal />
  </AppContainer>
);

export default App;
