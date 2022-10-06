import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// エントリポイント(index.js)を介してのimport
// import { Socialmedia, Twitter } from './components/index'
import Works from './components/Works'
import Collection from './components/Collection'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={'/collection/'} element={<Collection/>} />
          <Route path={'/Works/'} element={<Works />} />
          
          <Route path={`/*/`} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
