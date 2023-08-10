import { createBrowserRouter,RouterProvider,Outlet,Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

//Layout component for SPA to add header and footer on all pages
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

//Define all routes
const defineRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/login",
        element: ""
      },
      {
        path: "/profile",
        element: ""
      },
      {
        path: "/error",
        element: ""
      },
      {
        path: "*",
        element: <Navigate to="/error" replace />
      }
    ]
  }
]);

function Router() {
  return (<RouterProvider router={defineRoutes} />);
}

export default Router;
