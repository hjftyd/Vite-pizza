import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import MainLayout from './layouts/MainLayout';

import './scss/app.scss';

const Cart = lazy(() => import('./pages/Cart'));
const FullPizza = lazy(() => import('./pages/FullPizza'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<div>Идет загрузка...</div>}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza/:id' element={<FullPizza />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
