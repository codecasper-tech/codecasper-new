import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Aboutus from "./pages/Aboutus";
import Payments from "./pages/Payments";
import FindMore from "./pages/FindMore";

function App() {

  const components = useRoutes([
		{
			path: "/",
			element: <Home />,
		},
    {
      path: "/aboutus",
      element: <Aboutus />,
    },
    {
      path: "/payments",
      element: <Payments />,
    },
    {
      path: "/findmore",
      element: <FindMore />,
    },
		{
			path: "*",
			element: <NotFound />,
		},
	])

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="sidecard">
        {components}
      </div>
    </div>
  );
}

export default App;
