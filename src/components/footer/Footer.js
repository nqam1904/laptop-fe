import { useSelector } from "react-redux";
import { footerSelector } from "redux/selector/footerSelector";
import './styles.scss';
import { FaFacebookF, FaMapMarkedAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { title_website } from "constants/common";
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
      <footer className="footer-distributed">

         <div className="footer-left">
            <h3>{title_website}</h3>
            <br />
            <p className="footer-company-name">{footer[0]?.copy_right}</p>
         </div>

         <div className="footer-center">
            <div className="footer_center_content">
               <span>{footer?.[0]?.description}</span>
            </div>
         </div>
         <div className="footer-right">
            <p className="footer-company-about">
               <span>{footer?.[0]?.title}</span>
               {footer?.[0]?.content}
            </p>
            <div className="footer-icons">
               {setting.map((item, index) => (
                  <a key={index} href={item?.link} target="_blank">{item.icon}</a>
               ))}


            </div>
         </div>
      </footer>
   );
};

export default Footer;
