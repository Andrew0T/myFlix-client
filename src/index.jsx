import { createRoot } from 'react-dom/client';
<<<<<<< Updated upstream
=======
import { Container } from 'react-bootstrap';

>>>>>>> Stashed changes
import { MainView } from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

<<<<<<< Updated upstream
// Main component (will eventually use all the others)
=======

>>>>>>> Stashed changes
const MyFlixApplication = () => {
  return (
    < Container>
      <MainView />
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);
<<<<<<< Updated upstream

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
=======
root.render(<MyFlixApplication/>);
>>>>>>> Stashed changes
