import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import Account from "./pages/Account";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/account' element={<Protected><Account /></Protected>}/>
      </Routes>
    </div>
  );
}

export default App;
