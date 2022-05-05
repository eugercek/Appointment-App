import "./App.css";
import Login from "./components/Home/Login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(false);

  return token ? <h1> Signed in </h1> : <Login />;
}

export default App;
