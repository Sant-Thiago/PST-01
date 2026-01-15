import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./App.css";
import Pst from "./pst-01/pst";
import Rewards from "./pst-01/rewards/rewards";
import Processing from "./pst-01/processing/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Pst/> } />
        <Route path="/rewards" element={ <Rewards/> } />
        <Route path="/processing" element={ <Processing/> } />
      </Routes>
    </Router>
  );
}

export default App;
