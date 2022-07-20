import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { getLaptopByCateAction } from "redux/actions/laptopAction";
import { headerSelector } from "redux/selector/headerSeletor";
import './styles.scss'
const Footer = () => {
   const header = useSelector(headerSelector)
   const dispatch = useDispatch()
   return (
      // <div className="footer-container">
      //    <div className="content_1">
      //       <p className="title_content_1">2022 Thinh Store|❤ Authroized Reseller</p>
      //       <span className="title-discription">
      //          Năm 2020, Thinh Store trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.
      //       </span>
      //       <div className="icons">
      //          <AiFillInstagram />
      //          <AiOutlineTwitter />
      //       </div>
      //    </div>
      //    <div className="content_2">
      //       <p className="title_content_1">Sản phẩm</p>
      //       {header.map((item, index) => (
      //          <Link key={index} onClick={() => dispatch(getLaptopByCateAction(item?.categories?.[0]?.name))} className="item_menu" to={`${item.url}`}>{item?.categories?.[0]?.name}</Link>
      //       ))}

      //    </div>
      //    <div className="content_3">
      //       <p className="title_content_1">Thông tin</p>
      //       <span className="item_menu">
      //          <Link to="/">Giới thiệu</Link>
      //       </span>
      //       <span className="item_menu">
      //          <Link to="/">Khuyến mãi</Link>
      //       </span>
      //       <span className="item_menu">
      //          <Link to="/">Bảo hành</Link>
      //       </span>
      //       <span className="item_menu">
      //          <Link to="/">Bảo hành</Link>
      //       </span>
      //       <span className="item_menu">
      //          <Link to="/">Bảo hành</Link>
      //       </span>
      //    </div>
      //    <div className="content_4">
      //       <p className="title_content_1">Địa chỉ</p>
      //       <span className="item_menu">
      //          <Link to="/">Tìm Store trên Google Map</Link>
      //       </span>
      //       <span className="item_menu">
      //          <Link to="/">Hệ thống cửa hàng</Link>
      //       </span>
      //       <p className="title_content_address">Liên hệ</p>
      //       <span className="item_menu">
      //          <Link to="/">Mua hàng</Link>
      //       </span>
      //       <span className="item_menu">
      //          <Link to="/">Khiếu nại</Link>
      //       </span>
      //    </div>
      // </div>
      <footer class="footer-distributed">

         <div class="footer-left">
            <h3>Sagar<span>Developer</span></h3>

            <p class="footer-links">
               <a href="#">Home</a>
               |
               <a href="#">About</a>
               |
               <a href="#">Contact</a>
               |
               <a href="#">Blog</a>
            </p>

            <p class="footer-company-name">Copyright © 2021 <strong>SagarDeveloper</strong> All rights reserved</p>
         </div>

         <div class="footer-center">
            <div>
               <i class="fa fa-map-marker"></i>
               <p><span>Ghaziabad</span>
                  Delhi</p>
            </div>

            <div>
               <i class="fa fa-phone"></i>
               <p>+91 74**9**258</p>
            </div>
            <div>
               <i class="fa fa-envelope"></i>
               <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
            </div>
         </div>
         <div class="footer-right">
            <p class="footer-company-about">
               <span>About the shop</span>
               <strong>Thinh laptop</strong> is a Youtube channel where you can find more creative CSS Animations
               and
               Effects along with
               HTML, JavaScript and Projects using C/C++.
            </p>
            <div class="footer-icons">
               <a href="#"><i class="fa fa-facebook"></i></a>
               <a href="#"><i class="fa fa-instagram"></i></a>
               <a href="#"><i class="fa fa-linkedin"></i></a>
               <a href="#"><i class="fa fa-twitter"></i></a>
               <a href="#"><i class="fa fa-youtube"></i></a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
