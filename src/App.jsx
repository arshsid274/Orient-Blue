import Navbar from './Components/Navbar.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './App.css'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Project from './Pages/Project.jsx';
import Services from './Pages/Services.jsx';

import Contact from './Pages/Contact.jsx';    
import BaseLayout from './Components/BaseLayout'; // 👈 import BaseLayout

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />, // 👈 Wrap everything inside BaseLayout
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/project", element: <Project /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> }
    ]
  }

]);

function App() {
 

  return (

    <> <div>
    <RouterProvider router={router}/>
    
   </div>

   </>
  
  )
}

export default App
