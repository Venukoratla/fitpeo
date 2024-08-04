import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <div className="flex justify-between items-start h-full bg-[#141316]">
        <Router>
          <Sidebar isOpen={sidebar} setIsOpen={setSidebar} />
          <Dashboard isOpen={sidebar} setIsOpen={setSidebar} />
        </Router>
      </div>
    </>
  );
}

export default App;
