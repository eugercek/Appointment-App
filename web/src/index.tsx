import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AddCustomer from "./components/Manager/AddCustomer";
import AddAnimator from "./components/Manager/AddAnimator";
import AddEquipmentPerson from "./components/Manager/AddEquipmentPerson";
import AppointmentScreen from "./components/Customer/Appointmentpage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      // TODO Merge routes into parent /add
      <Route path="/add/animator" element={<AddAnimator />} />
      <Route path="/add/customer" element={<AddCustomer />} />
      <Route path="/add/equipment-person" element={<AddEquipmentPerson />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
