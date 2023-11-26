import './App.css';
import Component1 from './components/Component1.jsx'
import LifeCycle1 from './components/LifeCycle1.jsx';
function App() {
  return (
    <div className="App">
      <header>
        Learn React
      </header>
      <Component1 />
      <LifeCycle1 temp='Piono'/>
    </div>
  );
}

export default App;
