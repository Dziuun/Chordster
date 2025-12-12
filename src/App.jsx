import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import About from "./Pages/About";
import ChordCreator from "./Components/ChordCreator";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const router = createBrowserRouter([
  { path: "/", Component: Homepage },
  { path: "about", Component: About },
  { path: "login", Component: Login },
  { path: "app", Component: ChordCreator },
]);
