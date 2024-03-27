

import React, {useEffect} from "react";
import $ from "jquery"
//** Router Components*/
import { BrowserRouter as AppRouter, Routes, Route } from "react-router-dom";
//** components imported */
import NotFound from "../not-found/404";
import { protectedRoutes, publicRoutes } from "./routes/routes";
import PublicRoutes from "./routes/public-routes";
import ProtectedRoutes from "./routes/protected-routes";

const Router = () => {
    // ** All of the available layouts
    useEffect(() => {
        if (window.location.pathname === "/dashboard") {
          $('body').css('background-image', 'none')
      }
      });
    
    return (
      <>
        <AppRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
  
            {/* protected routes imported */}
            <Route path="/" element={<ProtectedRoutes />}>
              {protectedRoutes.map((route) => {
                return <Route path={route.path} element={route.component} />;
              })}
            </Route>
  
            {/* public routes imported */}
            {publicRoutes.map((route) => {
                console.log("route=====", route)
              return (
                // <Route path={route.path} element={<PublicRoutes />}>
                <Route path="/" element={<PublicRoutes />}>
                  <Route 
                  path={route.path} 
                  // path={route.path}
                  element={route.component} />
                </Route>
              );
            })}
            
          </Routes>
        </AppRouter>
      </>
    );
  };
  export default Router;
  