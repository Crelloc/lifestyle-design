import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import {ThemeProvider} from "atomize";
import App from './App.jsx';

const theme = {
  grid: {
    gutterWidth: "10px", //16px is default
  }
};

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyletronProvider>
  ,
  document.getElementById('root')
);