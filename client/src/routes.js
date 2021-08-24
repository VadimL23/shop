import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AdminPage} from "./pages/AdminPage";
import {AuthPage} from "./pages/AuthPage";
import {BasketPage} from "./pages/BasketPage";
import {InfoPage} from "./pages/InfoPage";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {Page404} from "./pages/Page404";
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
            <Route path = {"/404"} component={Page404} exact/> 
            
            
            <Route render={()=>( <Redirect to = "/404" /> )}/>
         </Switch>
        );
        
    } else {
        
        return (
            <Switch>  
            
            <Route path="/404"  render={()=>{
                   return(<h1>404 Not found</h1>);
                  }} />
            
            <Route path = {route.MAIN_ROUTE}  component={MainPage} exact/> 
            <Route path = {route.BASKET_ROUTE}  component={BasketPage} exact/> 
            <Route path = {route.INFO_ROUTE+"/:id"}  component={InfoPage} exact/> 
            <Route path = {route.LOGIN_ROUTE} component={LoginPage} exact/>   
            <Route path = {route.REGISTRATION_ROUTE} component={RegistrationPage} exact/>                                                      
            
            <Route render={()=>( <Redirect to = "/404" /> )}/>
                 
                   
                   
            </Switch>
        )
          }
    
}


// <Route path = "/login" exact component={AuthPage} /> 