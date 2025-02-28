import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Layout from "./Components/Layout";
import Resources from "./Components/Resources";


function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="html" element={<Resources category="html" />} />
        <Route path="css" element={<Resources category="css" />} />
        <Route path="javascript" element={<Resources category="javascript" />} />
        <Route path="react" element={<Resources category="react" />} />
        <Route path="sanity" element={<Resources category="sanity" />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App
