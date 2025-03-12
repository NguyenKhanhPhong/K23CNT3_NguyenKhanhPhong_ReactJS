import React, { useState } from 'react';

export default function NkpProductAdd({ nkpAddNewProduct }) {
  const [nkpProduct, setNkpProduct] = useState({
    nkppId: '',
    nkppName: '',
    nkppQuantity: '',
    nkppPrice: '',
  });

  const nkpHandleChange = (e) => {
    const { name, value } = e.target;
    setNkpProduct({ ...nkpProduct, [name]: value });
  };  

  const nkpHandleSubmit = (e) => {
    e.preventDefault();
    if (nkpProduct.nkppId && nkpProduct.nkppName && nkpProduct.nkppQuantity && nkpProduct.nkppPrice) {
        nkpAddNewProduct(nkpProduct);
      setNkpProduct({
        nkppId: '',
        nkppName: '',
        nkppQuantity: '',
        nkppPrice: '',
      });
    } else {
      alert('Vui Lòng Nhập Tất Cả Các Dữ Liệu');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <h3 className="card-header text-center bg-success text-white">Thêm Sản Phẩm Mới</h3>
        <form onSubmit={nkpHandleSubmit}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="nkppId" className="form-label">nkppID</label>
              <input
                type="text"
                className="form-control"
                id="nkppId"
                name="nkppId"
                value={nkpProduct.nkppId}
                onChange={nkpHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nkppName" className="form-label">nkppName</label>
              <input
                type="text"
                className="form-control"
                id="nkppName"
                name="nkppName"
                value={nkpProduct.nkppName}
                onChange={nkpHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nkppQuantity" className="form-label">nkppQuantity</label>
              <input
                type="number"
                className="form-control"
                id="nkppQuantity"
                name="nkppQuantity"
                value={nkpProduct.nkppQuantity}
                onChange={nkpHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nkppPrice" className="form-label">nkppPrice</label>
              <input
                type="number"
                className="form-control"
                id="nkppPrice"
                name="nkppPrice"
                value={nkpProduct.nkppPrice}
                onChange={nkpHandleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Thêm Sản Phẩm</button>
          </div>
        </form>
      </div>
    </div>
  );
}