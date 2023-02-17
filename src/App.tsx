import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  const components = useRoutes([
		{
			path: "/",
			element: <Home />,
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
