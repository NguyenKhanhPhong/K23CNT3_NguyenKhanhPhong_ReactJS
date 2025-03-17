import React from 'react';

export default function NkpProductList({ nkpProductList }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <h3 className="card-header text-center bg-primary text-white">Danh Sách Sản Phẩm</h3>
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>nkppID</th>
              <th>nkppName</th>
              <th>nkppQuantity</th>
              <th>nkppPrice</th>
            </tr>
          </thead>
          <tbody>
            {nkpProductList.map((nkpItem) => (
              <tr key={nkpItem.nkppId}>
                <td>{nkpItem.nkppId}</td>
                <td>{nkpItem.nkppName}</td>
                <td>{nkpItem.nkppQuantity}</td>
                <td>{nkpItem.nkppPrice.toLocaleString()}</td> {/* Added number formatting */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}