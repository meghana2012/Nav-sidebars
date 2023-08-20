import {  Route, Routes } from "react-router-dom";
import Customers from "../pages/customers";
import Dashboard from "../pages/dashboard";
import Inventory from "../pages/inventory";
import Orders from "../pages/orders";


const Router = () => {
    return(
        <>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/inventory" element={<Inventory/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/customers" element={<Customers/>}/>
                </Routes>
        </>
    )
}
export default Router;