import React, { useState, useContext } from "react";
import { food_list } from "../../assets/assets";
import "./Cart.css";
import CartItem from "../../Components/CartItem/CartItem";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { getTotalCartAmount, vnd } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const rows = 4; // số hàng
  const cols = 5; // số cột
  const totalTables = rows * cols;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [selectedTables, setSelectedTables] = useState([]);

  const handleTableClick = (tableId) => {
    setSelectedTables((prevSelected) =>
      prevSelected.includes(tableId)
        ? prevSelected.filter((id) => id !== tableId)
        : [...prevSelected, tableId]
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email != null &&
      formData.name != null &&
      formData.phone != null
      && selectedTables.length > 0
    ) {
      alert("Thông tin đã được gửi!");
      console.log("Dữ liệu khách hàng:", formData, selectedTables);
    }else{
      alert("Vui lòng nhập đủ thông tin!")
    }

    
  };
  return (
    <div className="cart">
      <h2>Thông tin đặt món</h2>
      <table>
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên món</th>
            <th>số lượng</th>
            <th>Đơn giá</th>
            <th>Thêm/Bớt</th>
          </tr>
        </thead>
        <tbody>
          <CartItem food_list={food_list} />
        </tbody>
      </table>
      <div className="check-order">
        <h2>Thông tin khách hàng</h2>
        <form className="form-info-cus">
          <div className="left-form">
            <div className="row-info">
              <label className="label-info">Họ tên: </label>
              <input
                type="text"
                name="name"
                placeholder="Nhập họ tên"
                value={formData.name}
                onChange={handleChange}
                className="input-info"
                required
              />
            </div>

            <div className="row-info">
              <label className="label-info">SDT: </label>
              <input
                type="tel"
                name="phone"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={handleChange}
                className="input-info"
                required
              />
            </div>

            <div className="row-info">
              <label className="label-info">Email: </label>
              <input
                type="email"
                name="email"
                placeholder="Nhập email"
                value={formData.email}
                onChange={handleChange}
                className="input-info"
                required
              />
            </div>
          </div>

          <div className="right-form">
            <div className="sle-table">
              {Array.from({ length: totalTables }, (_, i) => {
                const tableId = i + 1;
                const isSelected = selectedTables.includes(tableId);
                return (
                  <div
                    key={tableId}
                    className={`table-order ${isSelected ? "active" : ""}`}
                    onClick={() => handleTableClick(tableId)}
                  >
                    Bàn {tableId}
                  </div>
                );
              })}
            </div>
          </div>
        </form>
        <div className="submit-total">
          <input type="text" value={vnd(getTotalCartAmount())} />
          <button type="submit" className="btn-order" onClick={handleSubmit}>
            Gửi thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
