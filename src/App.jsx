import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomepage from "./pages/AdminHomepage";
import PageNotFound from "./pages/PageNotFound";
import Actions from "./pages/Actions";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import Base from "./components/Base";

function App() {
  return (
    <div className="app">
      {/* <Sidebar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="app" element={<Base />}>
            <Route path="" element={<AdminHomepage />} />
            <Route path="orders" element={<Orders />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
          {/* <Route path="/" element={<AdminHomepage />} />
          <Route path="/actions" element={<Actions />} />
          
          
          <Route path="/sales" element={<Sales />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
