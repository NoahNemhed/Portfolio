import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './views/Home';
const Work = React.lazy(() => import('./views/Work'));
const Contact = React.lazy(() => import('./views/Contact'));
const About = React.lazy(() => import('./views/About'));
const Experience = React.lazy(() => import('./views/Experience'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', 
        element: <Home />,
      },
      {
        path: 'about', 
        element: <About />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
