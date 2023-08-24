import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from './components/BookList';
import Form from './components/Form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form />,
  },
  {
    path: '/categories',
    element: <BookList />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
