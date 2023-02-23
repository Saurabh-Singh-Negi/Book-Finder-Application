import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Searchbar from "./Components/Searchbar";
import BookList from "./Components/BookList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="booklist" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
