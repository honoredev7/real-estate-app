import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
// import NewProperty from "views/NewProperty";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Admin = props => <AdminLayout {...props} />;


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Admin />} />
      {/* <Route path='/newProperty' element={<NewProperty />} /> */}
      <Route path="/" element={<Navigate to="/admin/dashboard" />} />
      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  </BrowserRouter>
);
