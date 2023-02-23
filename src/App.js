import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import { createRoot } from "react-dom/client";

import './App.css';
import './NavbarStyles.css'
import { Login } from './Login';
import { Register } from './Register';
import {Navbar} from './Navbar';
import {Root} from './root';
import { Forgotpass } from './Forgotpass';
import {AdminHome} from './AdminHome';
import ProtectedRoutes from './ProtectedRoutes';
import {AddAccount} from './AddAccount'
import {EditAccount} from './EditAccount'
import {ViewAccounts} from './ViewAccounts'
import {DeactivateAccount} from './DeactivateAccount'




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
  },
  {
    path: "adminhome",
    element: <AdminHome />
  },
  {
    path: "adminhome/addaccount",
    element: <AddAccount />
  },
  {
    path: "adminhome/editaccount",
    element: <EditAccount />
  },
  {
    path: "adminhome/viewaccounts",
    element: <ViewAccounts />
  },
  {
    path: "adminhome/deactivateaccount",
    element: <DeactivateAccount />
  },

  
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
