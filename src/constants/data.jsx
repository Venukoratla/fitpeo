import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { LuUserSquare } from "react-icons/lu";
import { FaCoins } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { TbHelpSquareFilled } from "react-icons/tb";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CgLoadbarDoc } from "react-icons/cg";
import { BiMoney } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";
//navbar data
export const menuList = [
  {
    title: "Dashboard",
    path: "",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    title: "Products",
    path: "",
    icon: <GoPackage />,
  },
  {
    title: "Customers",
    path: "",
    icon: <LuUserSquare />,
  },
  {
    title: "Income",
    path: "",
    icon: <FaCoins />,
  },
  {
    title: "Promote",
    path: "",
    icon: <TbDiscount2 />,
  },
  {
    title: "Help",
    path: "",
    icon: <TbHelpSquareFilled />,
  },
];

//table data
export const salesData = [
  {
    title: "Product 1",
    description: "Lorem ipsum, dolor sit amet co",
    image:
      "https://elements-cover-images-0.imgix.net/c031d43f-427a-4a2b-b428-61c29806a4a1?auto=compress%2Cformat&fit=max&w=900&s=2a9a6cb7aab80522a1d1a6e0f3552e4f",
    stock: 32,
    price: 45.99,
    total: 20,
  },
  {
    title: "Product 2",
    description: "Lorem ipsum, dolor sit ame.",
    image:
      "https://i.pinimg.com/1200x/71/1f/cf/711fcf265738a8dedd8695038c4ac28c.jpg",
    stock: 30,
    price: 54.59,
    total: 39,
  },
  {
    title: "Product 3",
    description: "Lorem ipsum, dolor sit .",
    image:
      "https://i.pinimg.com/1200x/2d/4f/46/2d4f46487391afc61a74edddc31b1a0f.jpg",
    stock: 12,
    price: 30.99,
    total: 23,
  },
];

//card data
export const cardList = [
  {
    label: "Earning",
    icon: <AiOutlineDollarCircle />,
    color: "bg-green-100 text-green-700",
    amount: 198,
    rate: 37.8,
  },
  {
    label: "Orders",
    icon: <CgLoadbarDoc />,
    color: "bg-violet-100 text-violet-700",
    amount: 2.4,
    rate: 2,
  },
  {
    label: "Balance",
    icon: <BiMoney />,
    color: "bg-blue-100 text-blue-700",
    amount: 2.4,
    rate: 2,
  },
  {
    label: "Total Sales",
    icon: <TbShoppingBag />,
    color: "bg-pink-100 text-pink-700",
    amount: 89,
    rate: 11,
  },
];
