import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import { createRoot } from "react-dom/client";

import './App.css';
import './NavbarStyles.css'
import { Login } from './Login';
import { Register } from './Register';
import {Navbar} from './Navbar';
import {Root} from './root';
import { Forgotpass } from './Forgotpass';



function App() {



  //Create routes for screen navigation
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
    path: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "forgotpass",
    element: <Forgotpass />
  }
    ]
  },
 
  
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
  
  
  return (
      
      <div className="App">
       <RouterProvider router={router} />
      </div>

  );
}
const AppLayout= () => {
  return (
    <>
      <div className="App">
      <Navbar />
      <Outlet />
      </div>
      
    </>
  )
}

export default App;
