import React, { useState } from 'react';
import NkpProductList from './components/NkpProductList';
import NkpProductAdd from './components/NkpProductAdd';

export default function NkpApp() {
  const nkpProduct = [
    { nkppId: "2310900023", nkppName: "Nguyễn Khánh Phong", nkppQuantity: 20, nkppPrice: 400000 },
    { nkppId: "SP001", nkppName: "Laptop Lenovo", nkppQuantity: 50, nkppPrice: 756232 },
    { nkppId: "SP002", nkppName: "Laptop asus", nkppQuantity: 60, nkppPrice: 967254 },
    { nkppId: "SP003", nkppName: "Macbook", nkppQuantity: 70, nkppPrice: 642646 },
  ];
  
  const [nkpProductList, setNkpProductList] = useState(nkpProduct);

  // Function to add a new product
  const nkpAddNewProduct = (nkpNewProduct) => {
    setNkpProductList((nkpPrevProducts) => [...nkpPrevProducts, nkpNewProduct]);
  };

  return (
    <div className="container-fluid">
      <NkpProductAdd nkpAddNewProduct={nkpAddNewProduct} />
      <NkpProductList nkpProductList={nkpProductList} />
    </div>
  );
}