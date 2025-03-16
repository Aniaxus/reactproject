import React, { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({ name: "", quantity: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...product, id: Date.now() };
    onAdd(newProduct);
  };

  return (
    <div className="add-product">
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={product.name} 
          onChange={handleChange} 
          placeholder="Tên sản phẩm"
          required
        />
        <input 
          type="number" 
          name="quantity" 
          value={product.quantity} 
          onChange={handleChange} 
          placeholder="Số lượng"
          required
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddProduct;
