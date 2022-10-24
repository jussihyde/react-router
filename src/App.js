import {
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import NotFound from "./routes/NotFound"
import './App.css';

function App() {
  
  return (
    <div className="App">
    <header className="App-header">
         <h1>Welcome to React Router</h1>
        </header>
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '} 
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path ="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
