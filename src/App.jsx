import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./global/navbar";
import Footer from "./Home/componente/footer";

function App() {

  return <div >
  <div className="container mx-auto">
  <Navbar></Navbar>
  </div>
  <Outlet></Outlet>
  <Footer></Footer>
  </div>;
}

export default App;
