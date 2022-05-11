import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import { useState } from "react";

import { UserRole } from "./types/Login";
import AddPage from "./components/Manager/AddPage";
import ErrorPage from "./components/Error/ErrorPage";
import AnimatorPage from "./components/Animator/AnimatorPage";
import CustomerPage from "./components/Customer/CustomerPage";

export default function App() {
  const [token, setToken] = useState<string>("");
  const [role, setRole] = useState<UserRole>(UserRole.Customer);
  const [userId, setUserId] = useState<number>(0);

  if (token === "") {
    return (
      <LoginPage
        setToken={setToken}
        setRole={setRole}
        role={role}
        setUserId={setUserId}
      />
    );
  }

  switch (role) {
    case UserRole.Manager:
      return <AddPage />;
    case UserRole.Animator:
      return <AnimatorPage />;
    case UserRole.Customer:
      return <CustomerPage userId={userId} />;
    default:
      return <ErrorPage />;
  }
}
