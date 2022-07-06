import React from "react";
import './styles.scss'
const Modal = ({ close }) => (
   <div className="modal">
      <a className="close" onClick={close}>
         &times;
      </a>
      <div className="header"> Thông báo </div>
      <div className="content">
         Chức năng đang phát triển vui lòng liên hệ:
         <br />
         + Số điện thoại: 0123456789
         <br />
         + facebook : facebook.com.vn
      </div>
   </div>
);
export default Modal