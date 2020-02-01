import React  from 'react';
import logo from './logo.svg';
import './App.css';
import StatefulHello from './components/StatefulHello';
// import { mySearch } from './components/tsInterface';
// import Example from './components/useContext';
// import Example from './components/tsFunction';
//import ContextExample from './components/contextExample';
import CloneEle from './components/cloneElement';
const App: React.FC = (props) => { 
  //console.log(mySearch('111', '222'));
  // const [count, setCount] = useState(0); 
  // setTimeout(() => { setCount(5)}, 300);
  // Table({count: count}) 
  // TableOnce({count: count})
  return (
    <div className="App">
      <CloneEle>
        { React.Children }
      </CloneEle>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StatefulHello name="ahahah" enthusiasmLevel={10} />
      </header>
    </div>
  );
}

export default App;
