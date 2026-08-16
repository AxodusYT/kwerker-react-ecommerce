import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/NAvbar";

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <AppRoutes/>
    </div>
  );
};

export default App;
