import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {Provider} from "react-redux";
import {store} from "./app/appStore";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let persist = persistStore(store)
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persist} loading={null} >
              <App />
          </PersistGate>
      </Provider>
   </React.StrictMode>
);

