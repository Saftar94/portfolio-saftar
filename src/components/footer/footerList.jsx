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
    header: "Style Guide",
    svg: <FaInstagram />,
  },
  {
    id: uuid(),
    header: "Licence",
    svg: <FaFacebookF />,
  },
  {
    id: uuid(),
    header: "Changelog",
    svg: <FaLinkedinIn />,
  },
  {
    id: uuid(),
    svg: <FaTelegramPlane />,
  },
];
