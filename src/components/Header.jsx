import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-8 px-20">
      <nav className="flex items-center place-content-between">
        <p className="font-bold text-xl">React Quiz Game by Tayfun Açıcı</p>
        <ul className="flex text-lg items-center place-content-end space-x-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lists">Playlists</Link>
          </li>
          <li>
            <Link to="/new">Make a new Playlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
