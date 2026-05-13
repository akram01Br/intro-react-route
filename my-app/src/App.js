import logo from './logo.svg';
import './App.css';
import {  Route, Routes  } from 'react-router-dom';
import Hello from "./Hello";
import Home from './Home';
function App() {
  return (
    <div className="App">
      
      {/* Routes */}
      <div>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li> <button>post</button></li>
                    <li> <button>hallo</button></li>

        </ul>
      </div>
      <Routes>
        <Route path ="/hello" element={<h1>{<Hello />}</h1>}/>

        <Route  path="/"  element={<h2>{<Home />}</h2>} />
      </Routes>
    </div>
  );
}

export default App;
