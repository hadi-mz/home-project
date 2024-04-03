import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/home/Home';
import SinglePage from './Pages/singlePage/SinglePage';
import Store from "./Store"
import { Provider } from 'react-redux';
import SingleProduct, { loader as SingleProductLoader } from "./Pages/singleProduct/SingleProduct"
import NewHome from './component/newHome/NewHome';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/singlepage",
    element: <SinglePage />,
  },
  {
    path: "/home/singleproduct/:id",
    element: <SingleProduct />,
    loader: SingleProductLoader
  },
  {
    path:"/newhome",
    element:<NewHome />
  }


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
