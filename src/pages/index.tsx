import './index.pcss';
import React, { lazy, Suspense, useContext, useState, useEffect } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "words" */ './home'));

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
              <Route path="/words" component={Words} />
              <Redirect from='/' to='/words' />
            </Switch>
          </HashRouter>
        </Suspense>
      </MainCtx.Provider>
    </div>
  )
};
