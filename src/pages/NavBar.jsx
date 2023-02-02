import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Navbar = () => {
    const { user } = useAuth();
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/private">Private</NavLink>
            {user.username && <NavLink to="/profile">Profile</NavLink>}
            {!user.username && <NavLink to="/login">Login</NavLink>}
        </nav>
    );
};
export default Navbar;