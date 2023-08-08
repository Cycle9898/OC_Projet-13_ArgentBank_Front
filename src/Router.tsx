import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

//Layout component for SPA to add header and footer on all pages
function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

//Define all routes from Layout component
const defineRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: ""
      }
    ]
  }
]);

function Router() {
  return (<RouterProvider router={defineRoutes} />);
}

export default Router;
