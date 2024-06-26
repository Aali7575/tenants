import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayoutPage from "./pages/minlayoutpage";
import PropertyManagementPage from "./pages/propertymanagement";
import DashboardItemPage from "./pages/dashboarditempage";
import LoginInPage from "./pages/loginpage";
import AppLayout from "./components/dashboard/mainlayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginInPage />} />
        <Route path="/agentdashboard/*" element={<AppLayout />}>
          <Route index element={<MainLayoutPage />} />
          <Route path="propertymanagement" element={<PropertyManagementPage />} />
          <Route path="dashboarditempage" element={<DashboardItemPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
