import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
