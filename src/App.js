import React from "react";
import { AuthProvider } from "./provider/AuthProvider";
import RoutePath from "./routes/RoutePath";
import Navbar from "./pages/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <RoutePath />
    </>
  );
}

export default App;
