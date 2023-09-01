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
  },
  {
    id: uuid(),
    header: "aliev.saftar94@gmail.com",
    svg: <FaFacebookF />,
  },
  {
    id: uuid(),
    header: "Kharkov, Ukraine",
    svg: <FaLinkedinIn />,
  },
  {
    id: uuid(),
    svg: <FaTelegramPlane />,
  },
];
