import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ForRent from "./Components/ForRent";
import AllCar from "./Components/AllCar";
import EditPage from "./Components/EditPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/booking", element: <AllCar /> },
    { path: "/for-rent", element: <ForRent /> },
    { path: "/edit", element: <EditPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
