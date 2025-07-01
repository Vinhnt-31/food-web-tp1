import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu gửi:", formData);
    // Thêm xử lý gửi form ở đây (API, alert, v.v.)
  };

  return (
    <div className="contact" id="contact">
      <div className="form">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Tên:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="inputStyle"
            />
          </label>

          <label>
            Số điện thoại:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="inputStyle"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="inputStyle"
            />
          </label>

          <label>
            Nội dung:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="inputStyle"
              style={{ height: "100px" }}
            />
          </label>

          <button type="submit" className="buttonStyle">
            Gửi
          </button>
        </form>
      </div>
      <p></p>
      <div className="gree">
        
      </div>
    </div>
  );
};

export default Contact;
