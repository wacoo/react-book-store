import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from './components/BookList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BookList />,
  },
  {
    path: '/categories',
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
