import './index.pcss';
import React, { Suspense } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './home';
import { ThemeWrapper } from '../containers/Theme/index';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMainCtx {}

export const MainCtx = React.createContext<IMainCtx>({});

const App = () => (
  <div className="coral-main">
    <ThemeWrapper>
      <MainCtx.Provider value={{}}>
        <Suspense fallback="Loading...">
          <HashRouter>
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect from="/" to="/home" />
            </Switch>
          </HashRouter>
        </Suspense>
      </MainCtx.Provider>
    </ThemeWrapper>
  </div>
);

export default App;
