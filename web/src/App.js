import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./App.css";
import Pst from "./pst-01/pst";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Pst/> } />
      </Routes>
    </Router>
  );
}

export default App;
