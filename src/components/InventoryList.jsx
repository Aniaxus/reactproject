import React from "react";

const InventoryList = ({ products, onUpdate, onDelete }) => {
  return (
    <div className="inventory-list">
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>{product.quantity}</span>
            <button onClick={() => onUpdate({ ...product, quantity: product.quantity + 1 })}>Cập nhật</button>
            <button onClick={() => onDelete(product.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
