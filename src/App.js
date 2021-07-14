import './App.css';
import { BrowserRouter as DomRouter } from 'react-router-dom';
import { Router } from 'routes';
// App will be responsible for housing all logic related to context and stores
// and all other top level state management or them configurations

function App() {
  return (
    <>
      <DomRouter>
        <Router />
      </DomRouter>
    </>
  );
}

export default App;
