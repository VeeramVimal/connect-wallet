import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isUserLoggedIn } from "../../utils/helper";

const useAuth = () => {
    const user = localStorage.getItem('user')
    if (user) {
        return true
    } else {
        return false
    }
};


const PublicRoutes = (props) => {
    // const auth = isUserLoggedIn()
    // return auth ? <Navigate to="/" /> : <Outlet />
    return <Outlet />

};

export default PublicRoutes;