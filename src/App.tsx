import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import OrderTab from './components/OrderTab';
import Products from './components/Products';

const App: React.FC = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <OrderTab />
    <Products />
  </div>
);

export default App;
