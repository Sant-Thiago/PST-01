import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./App.css";
import Pst from "./pst-01/pst";
import Rewards from "./pst-01/rewards/rewards";
import Processing from "./pst-01/processing/Index";
import Confirmation from "./pst-01/confirmation/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Pst/> } />
        <Route path="/rewards" element={ <Rewards/> } />
        <Route path="/processing" element={ <Processing/> } />
        <Route path="/processing" element={ <Processing/> } />
        <Route path="/confirmation" element={ <Confirmation/> } />
      </Routes>
    </Router>
  );
}

export default App;
