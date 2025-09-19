
import { Menu, Search, X } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Categories for navbar links
const links = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

const Navbar = ({ setArticles }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  // Handle search input
  const handleSearch = async (e) => {
    const search = e.target.value;
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`);
      setArticles(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  // Toggle between light and dark theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='fixed w-full bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 z-10 shadow-md shadow-black/40'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <Link to={'/'}>
          <div className='md:text-2xl text-lg font-bold text-emerald-600 dark:text-emerald-400 cursor-pointer'>
            BytePress
          </div>
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-6'>
          {links.map((link) => (
            <Link
              to={`/${link.toLowerCase()}`}
              key={link}
              className='text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition'
            >
              {link}
            </Link>
          ))}
        </div>

        <div className='flex items-center justify-center gap-4'>
          {/* Search */}
          <div className='relative bg-gray-100 dark:bg-neutral-800 rounded-lg'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
            <input
              onChange={handleSearch}
              type="text"
              placeholder='Search news...'
              className='md:pl-10 pl-7 py-2 w-30 md:w-64 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 outline-none placeholder-gray-500'
            />
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className='bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700'
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className='md:hidden text-gray-900 dark:text-gray-100'>
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden px-4 pb-4 bg-white dark:bg-neutral-950'>
          {links.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className='block py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition'
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

