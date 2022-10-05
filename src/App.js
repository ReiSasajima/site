import './App.css';
import About from './components/About'
import Header from './components/Header'
// エントリポイント(index.js)を介してのimport
import {Socialmedia, Twitter} from './components/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Socialmedia />
      <Twitter />
    </div>
  );
}

export default App;
