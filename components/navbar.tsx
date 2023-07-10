import Image from "next/image";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible((prev) => !prev);
  };

  return (
    <nav className="w-full fixed z-40">
      <div
        className="
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900
            bg-opacity-90
        "
      >
        <Image
          alt="Nextflix Logo"
          src={"/images/nextflix-text.png"}
          className="w-24"
          width={500}
          height={500}
        />
        <div
          className="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
            "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={isMobileMenuVisible} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-white cursor-pointer hover:text-gray-300 transition">
            <BsSearch />
          </div>
          <div className="text-white cursor-pointer hover:text-gray-300 transition">
            <BsBell />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                alt="Profile"
                src={"/images/default-blue.png"}
                width={500}
                height={500}
              />
            </div>
            <BsChevronDown className="text-white transition" />\
            <AccountMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
