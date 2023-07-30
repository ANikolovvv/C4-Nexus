import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Shoes from "./components/Pages/Shoes/Shoes";
import Shirts from "./components/Pages/Shirts/Shirts";
import Shorts from "./components/Pages/Shorts/Shorts";
import DataProvider from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Shorts />}></Route>
            <Route path="/shoes" element={<Shoes />}></Route>
            <Route path="/shirts" element={<Shirts />}></Route>
          </Routes>
          <Footer />
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
