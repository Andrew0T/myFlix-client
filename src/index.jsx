import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container } from 'react-bootstrap';

import { MainView } from './components/main-view/main-view';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

// Main component (will eventually use all the others)

const MyFlixApp = () => {
  return (
    < Container>
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApp />);
