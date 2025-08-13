"use client";

import React, { useState } from 'react';
import Layout from '@/components/Layout';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    title_lh: "",
    content: "",
    code: "",
  });

  // Validation email
  const isValidEmail = (email: string) => {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Bạn chưa điền tên !.");
      return;
    }
    if (!form.phone.trim()) {
      alert("Số điện thoại không được để trống!.");
      return;
    }
    if (!form.email.trim()) {
      alert("Bạn chưa điền Email !.");
      return;
    }
    if (!isValidEmail(form.email)) {
      alert("Email không hợp lệ !.");
      return;
    }
    if (!form.address.trim()) {
      alert("Địa chỉ không được để trống.");
      return;
    }
    if (!form.title_lh.trim()) {
      alert("Tiêu đề không được để trống.");
      return;
    }
    if (!form.content.trim()) {
      alert("Nội dung không được để trống.");
      return;
    }

    // Nếu ok, submit form (hiện tại chỉ alert)
    alert("Gửi form thành công!");
    // TODO: Gửi data đi server ở đây

    // Reset form nếu muốn:
    // setForm({ name: "", phone: "", email: "", address: "", title_lh: "", content: "", code: "" });
  };

  const handleReset = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      title_lh: "",
      content: "",
      code: "",
    });
  };
  return (
    <Layout
      title="Liên Hệ - Thiết Bị Nhất Phát | Xe Nâng Người Genie"
      description="Liên hệ với Thiết Bị Nhất Phát để được tư vấn và báo giá xe nâng người Genie. Hotline: 0967.098.118 - 0962.098.118. Địa chỉ: Hà Nội."
      keywords="liên hệ thiết bị nhất phát, hotline xe nâng người, địa chỉ công ty xe nâng người, tư vấn xe nâng người"
    >
      <div id="page3" style={{ marginTop: 50 }}>
      <div className="container">
        <div className="row">
          <div className="clear"></div>

          <div className="left-lh col-md-4 col-sm-4 col-xs-12">
            <form id="lh" name="lh" onSubmit={handleSubmit} onReset={handleReset}>

              <div className="form-lienhe">
                <label>Họ Và Tên:</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-lienhe">
                <label>Điện thoại:</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-lienhe">
                <label>E-Mail:</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-lienhe">
                <label>Địa chỉ:</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  id="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-lienhe">
                <label>Chủ đề:</label>
                <input
                  className="form-control"
                  type="text"
                  name="title_lh"
                  id="title_lh"
                  value={form.title_lh}
                  onChange={handleChange}
                />
              </div>

              <div className="form-lienhe">
                <label>Yêu cầu khác:</label>
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  rows={8}
                  value={form.content}
                  onChange={handleChange}
                />
              </div>

              <div className="form-lienhe">
                <input type="submit" name="submit" value="Gửi" />
                <input type="reset" name="reset" value="Nhập lại" />
              </div>
            </form>

            <div className="clear"></div>
          </div>

          <div className="bando-lh col-md-8 col-sm-8 col-xs-12" style={{ marginTop: 50 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14899.768855201954!2d105.88370382210996!3d20.99495337626519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aeb12127603f%3A0x2a55a986aff64bc!2zVGhhbmggVHLDrCwgSG_DoG5nIE1haSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1538990131984"
              width="100%"
              height="600"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              title="Google Maps"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .left-lh {
          float: left;
          margin: auto;
          padding-bottom: 50px;
        }
        .form-lienhe {
          float: left;
          width: 100%;
          margin-top: 10px;
        }
        .form-lienhe label {
          float: left;
          width: 100%;
          color: #303030;
          font-family: "Times New Roman", Times, serif;
          font-size: 16px;
          margin-top: 0px;
        }
        .form-lienhe input {
          padding: 10px 6px;
          width: 100%;
          border-radius: 0px;
          height: auto;
          border: 1px solid #cdcdcd;
          background: #f3f3f3;
        }
        .form-lienhe textarea {
          width: 100%;
          border: 1px solid #cdcdcd;
          background: #f5f5f5;
          border-radius: 0px;
          padding: 10px 6px;
        }
        li.macode p {
          float: right;
          border-radius: 50px;
          margin-right: 0px;
          text-align: center;
          padding: 6px 20px;
          font-size: 16px;
          margin-top: 25px;
          background: rgba(132, 120, 120, 0.16);
          color: rgb(33, 148, 210);
          font-style: italic;
        }
        input[type="submit"] {
          margin-left: 90px;
          margin-right: 10px;
        }
        input[type="submit"], input[type="reset"] {
          background: #000 !important;
          color: #fff !important;
          padding: 8px 10px !important;
          width: 60px !important;
          border: none !important;
          border-radius: 3px !important;
          cursor: pointer !important;
        }
        input[type="submit"]:hover,
        input[type="reset"]:hover {
          opacity: 0.9;
        }
        .bando-lh iframe {
          width: 100%;
          border: 1px solid #cdcdcd;
        }
        .clear {
          clear: both;
        }
      `}</style>
    </div>
    </Layout>
  );
}

