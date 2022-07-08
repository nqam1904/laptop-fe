import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './styles.scss'
const Footer = () => {
   return (
      <div className="footer-container">
         <div className="content_1">
            <p className="title_content_1">2022 Thinh Store|❤ Authroized Reseller</p>
            <span className="title-discription">
               Năm 2020, Thinh Store trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.
            </span>
             <div className="icons">
               <AiFillInstagram />
               <AiOutlineTwitter />
            </div>
         </div>
         <div className="content_2">
            <p className="title_content_1">Sản phẩm</p>
               <Link className="item_menu" to="/">Asus</Link>
            <span className="item_menu">
               <Link to="/">Dell</Link>
            </span>
            <span className="item_menu">
               <Link to="/">Apple</Link>
            </span>
            <span className="item_menu">
               <Link to="/">Asus</Link>
            </span>
            <p className="item_menu">
               <Link to="/">MSI</Link>
            </p>
         </div>
         <div className="content_3">
            <p className="title_content_1">Thông tin</p>
            <span className="item_menu">
               <Link to="/">Giới thiệu</Link>
            </span>
            <span className="item_menu">
               <Link to="/">Khuyến mãi</Link>
            </span>
            <span className="item_menu">
               <Link to="/">Bảo hành</Link>
            </span>
            <span className="item_menu">
               <Link to="/">Bảo hành</Link>
            </span>
            <span className="item_menu">
               <Link to="/">Bảo hành</Link>
            </span>
         </div>
         <div className="content_4">
            <p className="title_content_1">Địa chỉ</p>
            <span className="item_menu">
               <Link to="/">Tìm Store trên Google Map</Link>
            </span>
            <span className="item_menu">
               <Link to="/">Hệ thống cửa hàng</Link>
            </span>
            <p className="title_content_address">Liên hệ</p>
            <span className="item_menu">
               <Link to="/">Mua hàng</Link>
            </span>
            <span className="item_menu">
               <Link to="/">Khiếu nại</Link>
            </span>
         </div>
      </div>
   );
};

export default Footer;
