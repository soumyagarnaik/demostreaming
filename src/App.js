import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/series' element={<SeriesPage />} />
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
