import { Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";
import Transactions from "../pages/Transactions";


export function RoutesApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/login/register" element={ <LoginRegister /> } />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
    </div>
  );
}