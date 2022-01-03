import { StoreProvider } from "./Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Citas from "./pages/Citas";
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
  return (
    <StoreProvider>
      <Router>
          <Routes>
            <Route exact path="/" element={<Citas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
