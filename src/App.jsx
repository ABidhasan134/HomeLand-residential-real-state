import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./global/navbar";
import Footer from "./Home/componente/footer";

function App() {

  return < >
  <div className="container mx-auto">
  <Navbar></Navbar>
  <Outlet></Outlet>
  </div>
  <Footer></Footer>
  </>;
}

export default App;
