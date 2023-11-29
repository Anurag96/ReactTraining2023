import logo from './logo.svg';
import './App.css';
import Counter from './Features/Counter/Counter';
import Counter2 from './Features/Counter/Counter2';
import User from './Features/Counter/User';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
      <User />
    </div>
  );
}

export default App;
