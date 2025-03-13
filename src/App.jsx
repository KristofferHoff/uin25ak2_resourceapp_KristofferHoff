import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/App.scss";
import "./Components/Nav";
import Layout from "./Components/Layout";
import Resources from "./Components/Resources";


function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Resources category="html"/>}/>
        <Route path="html" element={<Resources category="html" />} />
        <Route path="css" element={<Resources category="css" />} />
        <Route path="javascript" element={<Resources category="javascript" />} />
        <Route path="react" element={<Resources category="react" />} />
        <Route path="sanity" element={<Resources category="headless-cms" />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App


