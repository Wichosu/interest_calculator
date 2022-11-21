import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import CompoundCalc from '../pages/compound/CompundCalc';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/compound-interest' element={<CompoundCalc />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/compound-interest'>Compound Interest Calculator</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return(
    <div>
      <p>This is home</p>
    </div>
  )
}