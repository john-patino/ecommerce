import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/Index";
import { CartcontextProvider } from "./context/cartContext";
import ProductPage from "./pages/IndexPage/productPage";
import Carritovista from "./pages/IndexPage/carritoPage";
import Tallas from "./pages/tallaPage";
import Pagination from "./pages/tiendaPage";
function App() {

  return (
    <CartcontextProvider>
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/ProductId" element={<ProductPage/>}/>
        <Route path="/Compras" element={<Carritovista/>}/>
        <Route path="/Tallas" element={<Tallas/>}/>
        <Route path="/Search" element={<Pagination/>}/>
      </Routes>
    </BrowserRouter>
    </CartcontextProvider>
  )
}

export default App
