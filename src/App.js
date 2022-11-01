import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./pages/Home";
import Page from "./pages/Page";

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/page" element={< Page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
