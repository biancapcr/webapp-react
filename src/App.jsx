import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailMovie from "./pages/DetailMovie.jsx";
import NotFound from "./pages/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<DetailMovie />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
