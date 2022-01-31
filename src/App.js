import "./App.css";
import HomeTemplate from "./Template/HomeTemplate";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FamilyPage from "./Pages/FamilyPage";
import RecordBookPage from "./Pages/RecordBookPage";
import Login from "./Pages/Login";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home/Home";
import Catalogue from "./Pages/Catalogue/Catalogue";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Switch>
          <HomeTemplate path="/" exact Component={Home} />
          <HomeTemplate path="/catalogue" Component={Catalogue} />
          <HomeTemplate path="/help" Component={Catalogue} />
          <HomeTemplate path="/feature" Component={Catalogue} />
          <HomeTemplate path="/reviews" Component={Catalogue} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
