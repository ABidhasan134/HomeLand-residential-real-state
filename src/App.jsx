import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./global/navbar";

function App() {

  return <div >
  <div className="container mx-auto">
  <Navbar></Navbar>
  </div>
  <Outlet></Outlet>
  </div>;
}

export default App;
