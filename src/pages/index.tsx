import './index.pcss';
import React, { lazy, Suspense, useContext, useState, useEffect } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';

import Home from './home';

interface IMainCtx {}
export const MainCtx = React.createContext<IMainCtx>({});

export default () => {
  const [loading, setLoading] = useState(true);
  const [globalError, setGlobalError] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <div className="coral-main">
      <MainCtx.Provider value={{}}>
        <Suspense fallback="Loading...">
          <HashRouter>
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect from='/' to='/home' />
            </Switch>
          </HashRouter>
        </Suspense>
      </MainCtx.Provider>
    </div>
  )
};
