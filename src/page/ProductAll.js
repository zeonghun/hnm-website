import React, { useEffect } from "react";

const ProductAll = () => {
  const getProducts = async () => {
    // API 호출
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return <div></div>;
};

export default ProductAll;
