import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pastes from "./components/Pastes";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewPastes from "./components/ViewPaste";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/pastes",
    element: (
      <>
        <Navbar />
        <Pastes />
        <Footer />
      </>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <>
        <Navbar />
        <ViewPastes />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
