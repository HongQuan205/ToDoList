import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Setup redux
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/RootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
