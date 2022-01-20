import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home'
import Single from '../src/Pages/SinglePost'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/:id/*" element={<Single/>}/>
      </Routes>
    </div>
  );
}

export default App;
