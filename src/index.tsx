import React from 'react';
import {render} from 'react-dom';

import App from './pages';

function renderApp() {
  render(<App />, document.querySelector('#app'));
}

renderApp();

// @ts-ignore
module.hot.accept();
