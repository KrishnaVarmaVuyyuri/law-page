import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Resources from "./components/Resources/Resources";
import './App.css';

function App() {
  return (
    <Router>  
      <Header /> 
      <Routes>
        <Route path="/" element={<div>Home Page Content</div>} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
