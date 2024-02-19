import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favourites" element={<FavouritesPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
