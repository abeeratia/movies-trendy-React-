import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';



const root =createHashRouter([
  {path:'' ,element:<Layout/> , children:[
{index:true ,element:<Home/>},
{path:'home' ,element:<Home/>},
{path:'Contact',element:<Contact/>},
{path:'About',element:<About/>},
{path:'*', element: <div className='bg-success d-flex vh-100 justify-content-center align-items-center'>
<h2 className='text-white fs-2'>Not Found The Page</h2>
</div>
}

  ]}
])


function App() {
  return (
    <>
    <RouterProvider router = {root}/>
    </>
  );
}

export default App;
