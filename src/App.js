import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Main} from './components/Main';
import {Art} from './components/Art';
import {Blog} from './components/Blog';
import {Design} from './components/Design';
import {MyEssay} from './Blog/MyEssay';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/art" element={<Art/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/design" element={<Design/>}/>
      <Route path="/blog/myessay" element={<MyEssay/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
