import { Route, Routes } from "react-router-dom";
import PERMISSIONS from "../permissions/Permissions";
import Authorization from "./Authorization";
import PrivatePage from "../pages/PrivatePage";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Authentication from "./Authentication";
import SignIn from "../pages/SignInPage";

const RoutePath = () => {
    return(
        <Routes>
            <Route path="/" element={Home}/>
            <Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT]}/>}>
                <Route path="/private" element={<PrivatePage />}/>
            </Route>
            <Route 
                path="/profile"
                element={
                    <Authentication>
                        <Profile />
                    </Authentication>
                }
            />
            <Route path="/login" element={<SignIn />}/>
        </Routes>
    )
}
export default RoutePath;