import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 유저는 메뉴와 상품들을 볼 수 있다
// 유저는 로그인을 할 수 있다
// 유저는 상품 디테일을 보기 위해 로그인을 해야한다
// 로그인한 유저는 상품 디테일 정보를 볼 수 있다
// 유저는 상품을 검색할 수 있다
// 유저는 로그아웃을 할 수 있다

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true먼 로그인 됨, false면 로그인 안됨
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
