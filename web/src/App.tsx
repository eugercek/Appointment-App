import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import { useState } from "react";

import { UserRole } from "./types/Login";
import AddPage from "./components/Manager/AddPage";
import ErrorPage from "./components/Error/ErrorPage";

export default function App() {
  const [token, setToken] = useState<string>("");
  const [role, setRole] = useState<UserRole>(UserRole.Customer);

  if (token === "") {
    return <LoginPage setToken={setToken} setRole={setRole} role={role} />;
  }

  switch (role) {
    case UserRole.Manager:
      return <AddPage />;
    default:
      return <ErrorPage />;
  }
}
