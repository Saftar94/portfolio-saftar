import { v4 as uuid } from "uuid";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

export const FooterList = [
  {
    id: uuid(),
    header: `+380962329868 UA`,
    svg: <FaInstagram />,
    link: `https://www.instagram.com/saftar_aliyev/`,
  },

  {
    id: uuid(),
    header: `+46700410208 SE`,
    svg: <FaTelegramPlane />,
    link: `https://t.me/AlievSaftar777`,
  },
  {
    id: uuid(),
    header: "aliev.saftar94@gmail.com",
    svg: <FaFacebookF />,
    link: `https://www.facebook.com/saftar.aliev`,
  },
  {
    id: uuid(),
    header: "Kharkov, Ukraine",
    svg: <FaLinkedinIn />,
    link: `https://www.linkedin.com/in/saftar-aliev-8a8ab1229/`,
  },
];
