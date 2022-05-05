import "./App.css";
import Login from "./components/Home/Login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState<string>("");

  if (token === "") {
    return <Login setToken={setToken} />;
  }

  return <h1>Hello World</h1>;
}

export default App;
