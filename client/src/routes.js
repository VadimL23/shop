import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AdminPage } from './pages/AdminPage';
import { AuthPage } from './pages/AuthPage';
import { BasketPage } from './pages/BasketPage';
import { CategoryPage } from './pages/CategoryPage';
import { InfoPage } from './pages/InfoPage';
import { AboutPage } from './pages/AboutPage';
import { DeliveryPage } from './pages/DeliveryPage';
import * as route from 'config/const.ts';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={route.MAIN_ROUTE} component={MainPage} exact />
        <Route path={route.BASKET_ROUTE} component={BasketPage} exact />
        <Route path={route.INFO_ROUTE + '/:id'} component={InfoPage} exact />
        <Route path={route.ADMIN_ROUTE} component={AdminPage} exact />
        <Route path={route.CATEGORY_ROUTE} component={CategoryPage} exact />
        <Route
          path={route.CATEGORY_ROUTE + '/:id'}
          component={CategoryPage}
          exact
        />
        <Route path={route.DELIVERY_ROUTE} component={DeliveryPage} exact />
        <Route path={route.ABOUT_ROUTE} component={AboutPage} exact />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path={route.MAIN_ROUTE} component={MainPage} exact />
        <Route path={route.BASKET_ROUTE} component={BasketPage} exact />
        <Route path={route.INFO_ROUTE + '/:id'} component={InfoPage} exact />
        <Route path={route.LOGIN_ROUTE} component={AuthPage} exact />
        <Route path={route.REGISTRATION_ROUTE} component={AuthPage} exact />
        <Route path={route.CATEGORY_ROUTE} component={CategoryPage} exact />
        <Route
          path={route.CATEGORY_ROUTE + '/:id'}
          component={CategoryPage}
          exact
        />
        <Route path={route.DELIVERY_ROUTE} component={DeliveryPage} exact />
        <Route path={route.ABOUT_ROUTE} component={AboutPage} exact />
        <Route path={route.AUTH_ROUTE} component={AuthPage} exact />{' '}
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    );
  }
};

// <Route path = "/login" exact component={AuthPage} />
