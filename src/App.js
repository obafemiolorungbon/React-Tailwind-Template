import './App.css';
import { NormalButton } from 'components';
// App will be responsible for housing all logic related to context and stores
// and all other top level state management or them configurations

function App() {
  return (
    <>
      <div>
        <NormalButton text="Welcome Home" />
        <NormalButton text="Welcome Abroad" />
      </div>
    </>
  );
}

export default App;
