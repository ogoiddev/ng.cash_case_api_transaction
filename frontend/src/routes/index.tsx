import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import Transactions from "../pages/Transactions";


export function RoutesApp() {
  return (
    
      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/login/register" element={ <LoginRegisterPage /> } />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
    
  );
}