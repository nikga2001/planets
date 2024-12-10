import Starter from "./Starter";
import Mercury from "./components/Mercury";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Neptune from "./components/Neptune";
import Saturn from "./components/Saturn";
import Venus from "./components/Venus";
import Jupiter from "./components/Jupiter";
import Uranus from "./components/Uranus";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* Define the default route */}
            <Route
              path="/"
              element={<Starter />}
            />
            <Route
              path="/Starter"
              element={<Starter />}
            />
            {/* Define the Mercury route */}
            <Route
              path="/Mercury/"
              element={<Mercury />}
            />
            <Route
              path="/Venus/"
              element={<Venus />}
            />
            <Route
              path="/Earth/"
              element={<Earth />}
            />
            <Route
              path="/Mars/"
              element={<Mars />}
            />
            <Route
              path="/Jupiter/"
              element={<Jupiter />}
            />
            <Route
              path="/Saturn/"
              element={<Saturn />}
            />
            <Route
              path="/Uranus/"
              element={<Uranus />}
            />
            <Route
              path="/Neptune/"
              element={<Neptune />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
