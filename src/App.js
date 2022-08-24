import logo from './logo.svg';
import './App.css';
import FunctionalComponents from './Components/FunctionalComponents';
import ClassComponents from './Components/ClassComponents';
import PropsExample from './Components/PropsExample';
import StateExample from './Components/StateExample';
import IncrementExample from './Components/IncrementExample';
import ChildComponent from './Components/MethodsAsProps/ChildComponent';
import ParentComponent from './Components/MethodsAsProps/ParentComponent';
import ConditionalRendering from './Components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      {/* <StateExample /> */}
      {/* <IncrementExample /> */}
      {/* <ParentComponent /> */}
      <ConditionalRendering />
    </div>
  );
}

export default App;
