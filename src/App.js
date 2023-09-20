import './App.css';
import { Routes, Route } from 'react-router-dom';
import Learn from './components/Learn';
import Reference from './components/Reference';
import Community from './components/Community';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar />
    
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='learn' element={<Learn />} />
        <Route exact path='/reference' element={<Reference />} />
        <Route exact path='/community' element={<Community />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog' element={<Blog />} />
      </Routes>
      
    </>
  );
}

export default App;
