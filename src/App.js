import { Routes,Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import { CategoryPage } from "./pages/CategoryPage";
import { DetailPage } from "./pages/DetailPage";


export function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/category/:name" element={<CategoryPage/>}/>
      <Route path="/meal/:id" element={<DetailPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

