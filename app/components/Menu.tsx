import Link from "next/link";
import { FaHome, FaUser, FaCalendar } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";

const menuItems = [
  { icon: FaUser, name: "Customer", link: "/" },
  { icon: FaHome, name: "Services", link: "/services" },
  { icon: FaClipboardList, name: "Appointments", link: "/appointments" },
  { icon: FaCalendar, name: "Calendar", link: "/Calendar" },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            href={item.link}
            className="flex items-center gap-2 p-2 rounded text-gray-500 py-2"
          >
            <Icon className="w-4 h-4" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
