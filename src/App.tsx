import Home from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Articles from "./pages/articles";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path="/article/:articleId" element ={<Articles />} />
      </Routes>
    </BrowserRouter >

  );
}