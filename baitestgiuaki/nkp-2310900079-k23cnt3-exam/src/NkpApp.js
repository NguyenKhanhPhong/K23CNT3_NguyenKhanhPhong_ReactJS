import React, { useState } from 'react';
import NkpProductList from './components/NkpProductList';
import NkpProductAdd from './components/NkpProductAdd';

export default function NkpApp() {
  const nkpProduct = [
    { nkppId: "2310900079", nkppName: "Nguyễn Khánh Phong", nkppQuantity: 1, nkppPrice: 1000 },
    { nkppId: "SP01", nkppName: "MT2", nkppQuantity: 50, nkppPrice: 123123 },
    { nkppId: "SP02", nkppName: "MT3", nkppQuantity: 60, nkppPrice: 123123 },
    { nkppId: "SP03", nkppName: "MT4", nkppQuantity: 70, nkppPrice: 123457 },
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