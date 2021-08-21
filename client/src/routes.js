import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {MainPage} from "./pages/MainPage";


export const useRoutes = isAuthenticated =>{
    
    if (isAuthenticated){
        return (
        <Switch>
          <Route>
            <Route path = "/"  component={MainPage} /> 
          </Route>
         </Switch>
        );
        
    } else {
        
        return (
            <Switch>  
            
            <Route path="/404"  render={()=>{
                   return(<h1>404 Not found</h1>);
                  }} />
            
                  
                 <Route path = "/create"  component={MainPage} />                          
                                             
                 <Route render={()=>( <Redirect to = "/404" /> )}/>
                 
                   
                   
            </Switch>
        )
          }
    
}


// <Route path = "/login" exact component={AuthPage} /> 