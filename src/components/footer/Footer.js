import { useSelector } from "react-redux";
import { footerSelector } from "redux/selector/footerSelector";
import './styles.scss';
import { FaFacebookF, FaMapMarkedAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
const Footer = () => {
   const footer = useSelector(footerSelector)
   const setting = [
      {
         id: 0,
         content: '',
         link: footer?.[0]?.facebook,
         icon: <FaFacebookF />
      },
      {
         id: 1,
         content: '',
         link: footer?.[0]?.address,
         icon: <FaMapMarkedAlt />
      },
      {
         id: 2,
         content: footer?.[0]?.email,
         link: `mailto:${footer?.[0]?.email}`,
         icon: <FaRegEnvelope />
      },
      {
         id: 3,
         content: footer?.[0]?.phone,
         link: `tel:${footer?.[0]?.phone}`,
         icon: <FaPhoneAlt />
      }
   ]
   return (
      <footer class="footer-distributed">

         <div class="footer-left">
            <h3>Thinh <span>Laptop</span></h3>
            <br />
            <p class="footer-company-name">{footer[0]?.copy_right}</p>
         </div>

         <div class="footer-center">
            <div className="footer_center_content">
               <span>{footer?.[0]?.description}</span>
           </div>
         </div>
         <div class="footer-right">
            <p class="footer-company-about">
               <span>{footer?.[0]?.title}</span>
               {footer?.[0]?.content}
            </p>
            <div class="footer-icons">
               {setting.map((item) => (
                  <a href={item?.link} target="_blank">{item.icon}</a>
               ))}


            </div>
         </div>
      </footer>
   );
};

export default Footer;
