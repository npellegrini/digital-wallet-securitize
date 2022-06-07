import React, { useEffect } from 'react';
import './App.scss';
import { useAppDispatch } from './hooks/useStateManagment';
import { getAllWallets } from './store/wallets/wallet.action';
import Container from 'react-bootstrap/Container';

import Dashboard from './components/Dashboard';



function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    
    dispatch(getAllWallets())
  }, [dispatch])

  
  return (
    <Container className='p-3'>
      <Dashboard />
    </Container>
  );
}

export default App;
