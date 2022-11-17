import React from 'react';
import { Create } from './components/Create';
import { Show } from './components/Show';
export const App = () => {
  return (
    <div className="container mt-5">
      <Create />
      <Show />
    </div>
  )
}
