import '../scss/styles.scss';
import React from 'react';
import * as ReactDOM from 'react-dom/client';

import PageRender from './components/pageRender'

// Okay! Let's add that React stuff!
const rootEl = document.getElementById('root');
const testRoot = ReactDOM.createRoot(rootEl);
testRoot.render(
    // <GrabPost />
    < PageRender />
);