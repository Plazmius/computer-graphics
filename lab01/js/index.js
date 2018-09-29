import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import css from "./../css/index.scss";


import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("content")
);
