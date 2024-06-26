import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayoutPage from "./pages/minlayoutpage";
import PropertyManagementPage from "./pages/propertymanagement";
import DashboardItemPage from "./pages/dashboarditempage";
import LoginInPage from "./pages/loginpage";

function App() {
  return (
    <div>

<Router>
  <Routes>
    <Route path = "/agentdashboard" element = {<MainLayoutPage/>}
     />
     <Route path = "agentdashboard/propertymanagement" element = {<PropertyManagementPage/>}/>
     <Route path = "agentdashboard/dashboarditempage" element = {<DashboardItemPage/>}/>
     <Route path = "/" element = {<LoginInPage/>}/>
     <Route path = "/agentdashboard" element = {<MainLayoutPage/>}/>
  </Routes>
</Router>

    </div>
  )
}

export default App