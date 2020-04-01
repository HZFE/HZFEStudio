import React from 'react';
import {render} from 'react-dom';

import App from './pages';

function renderApp() {
  render(<App />, document.querySelector('#app'));
}

renderApp();

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
module.hot.accept();
