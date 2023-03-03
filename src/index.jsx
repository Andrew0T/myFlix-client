import React from "react";
import { createRoot } from "react-dom/client";
import { Container } from "react-bootstrap";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import { MainView } from "./components/main-view/main-view";
import "./index.scss";

const MyFlixApp = () => {
  return (
    <Provider store={store}>
      <Container>
        <MainView />
      </Container>
    </Provider>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApp />);
