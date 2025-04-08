import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./App.css";
import Pst from "./pst-01/pst";
import Rewards from "./pst-01/rewards/rewards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Pst/> } />
        <Route path="/rewards" element={ <Rewards/> } />
      </Routes>
    </Router>
  );
}

export default App;
