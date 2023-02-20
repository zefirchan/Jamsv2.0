import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';


import './App.css';
import './NavbarStyles.css'
import { Login } from './Login';
import {Forgotpass} from './Forgotpass';
import { Register } from './Register';
import {AuthDetails } from './AuthDetails';
import {Navbar} from './Navbar';
import {Root} from './root';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route  index path="/Login" element={<Login />} />
        <Route  path="/Register"element={<Register />} />
      </Route>
    )

  )
  
  
  {/*toggle between login and forgot password forms */}
  return (
    <div className="App">
      
      <div className="App">
          <RouterProvider router={router} />
      </div>

      
    

      
    </div>
  );
}


export default App;
