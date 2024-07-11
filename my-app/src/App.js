import "./App.css";
import Navbar from "./components/Navbar";
import Clientsptnt from "./pages/Clientsptnt";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/clientsptnt' element={<Clientsptnt />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />*/}
        </Routes>
    </div>
  );
}
export default App;