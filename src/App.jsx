import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import ForRent from "./Components/ForRent";
import AllCar from "./Components/AllCar";
import EditPage from "./Components/EditPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/allcar", element: <AllCar /> },
    { path: "/for-rent", element: <ForRent /> },
    { path: "/edit/:carId", element: <EditPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
