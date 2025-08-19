'use client';
import { useState, useEffect } from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function Nav1() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Jika scroll sudah lebih dari 100px (bisa disesuaikan)
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        w-full h-[10vh] px-6 lg:px-12 flex justify-between items-center
        bg-black text-white
        transition-all duration-300 ease-in-out
        ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'}
      `}
    >
      {/* Mobile Menu */}
      <div className="flex flex-row gap-x-3 xl:hidden">
        <MenuIcon className="text-white" />
        <SearchIcon className="text-white" />
      </div>

      {/* Logo & Nav Items */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="xl:w-[5vw] w-10 h-full flex items-center justify-center">
          <img
            src="./puma.png"
            alt="Puma Logo"
            className="h-[80%] w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-5 text-[2vh] font-bold">
          <h3 className="cursor-pointer">Produk</h3>
          <h3 className="cursor-pointer">Wanita</h3>
          <h3 className="cursor-pointer">Pria</h3>
          <h3 className="cursor-pointer">Anak-Anak</h3>
          <h3 className="cursor-pointer">SpeedCat</h3>
          <h3 className="cursor-pointer">Koleksi</h3>
          <h3 className="cursor-pointer">Olahraga</h3>
          <h3 className="cursor-pointer">Outlet</h3>
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative hidden xl:block w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-5 py-2 rounded-md bg-black border border-white text-white"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
        </div>

        {/* Cart */}
        <div className="hidden xl:block">
          <ShoppingCartIcon className="w-6 h-6 text-white" />
        </div>

        {/* Profile */}
        <PersonIcon className="w-7 h-7 text-white" />
      </div>
    </div>
  );
}
