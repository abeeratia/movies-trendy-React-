
  import About from "../components/About/About";
  import Contact from "../components/Contact/Contact";
  import Layout from "../components/Layout/Layout";
  import Home from "../components/Home/Home";
  import { createBrowserRouter } from "react-router-dom";
  
  export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:
      <div className="bg-success d-flex vh-100 justify-content-center align-items-center">
              <h2 className="text-white fs-2">Not Found The Page</h2>
            </div>
            ,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);
  
