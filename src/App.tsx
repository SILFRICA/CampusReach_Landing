import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Overview from "./pages/overview/Overview";
import Creators from "./pages/creators/Creators";
import Pricing from "./pages/pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "/creators",
        element: <Creators />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;