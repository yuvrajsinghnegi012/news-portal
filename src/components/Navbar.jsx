import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-lg">News Portal</Link>
      <div>
        <Link to="/favorites" className="text-white mr-4">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
