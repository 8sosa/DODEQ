import './App.css';
import SuaRoutes from './Routes';
import { useEffect } from "react";
import { getSessionId } from "./utils/session";

function App() {
  useEffect(() => {
    const id = getSessionId();
    console.log("Session ID:", id); // for debugging
  }, []);

  return (
    <div className='App'>
      <SuaRoutes />
    </div>
  );
}

export default App;
