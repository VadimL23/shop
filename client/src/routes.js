import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AdminPage} from "./pages/AdminPage";
import {AuthPage} from "./pages/AuthPage";
import {BasketPage} from "./pages/BasketPage";
import {InfoPage} from "./pages/InfoPage";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import * as route from "config/const.ts"


export const useRoutes = isAuthenticated =>{
    
    isAuthenticated =false;
    
    if (isAuthenticated){
        return (
        <Switch>
             
            <Route path = {route.MAIN_ROUTE}  component={MainPage} exact/> 
            <Route path = {route.BASKET_ROUTE}  component={BasketPage} exact/> 
            <Route path = {route.INFO_ROUTE+"/:id"}  component={InfoPage} exact/> 
            <Route path = {route.ADMIN_ROUTE} component={AdminPage} exact/> 
            <Route render={()=>( <Redirect to = "/" /> )}/>
         </Switch>
        );
        
    } else {
        
        return (
            <Switch>  
                   
            <Route path = {route.MAIN_ROUTE}  component={MainPage} exact/> 
            <Route path = {route.BASKET_ROUTE}  component={BasketPage} exact/> 
            <Route path = {route.INFO_ROUTE+"/:id"}  component={InfoPage} exact/> 
            <Route path = {route.LOGIN_ROUTE} component={LoginPage} exact/>   
            <Route path = {route.REGISTRATION_ROUTE} component={RegistrationPage} exact/>       <Route render={()=>( <Redirect to = "/" /> )}/>
                 
                   
                   
            </Switch>
        )
          }
    
}


// <Route path = "/login" exact component={AuthPage} /> 