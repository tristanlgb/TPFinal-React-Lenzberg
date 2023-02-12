import React, { useState } from "react";
import CartWidgets from "../CartWidgets/CartWidgets";
import logo_letters from "../../logo_letters_transparent.png";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../../utils/firebaseFetching";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <nav className="header__nav">
      <Link to="/" className="nav__link">
        Inicio
      </Link>
      <NavLink to="/shop" className="nav__link">
        Comprar
      </NavLink>
      <Link to="/">
        <img src={logo_letters} alt="Logo letters" className="nav__logo" />
      </Link>

      <div className="dropdown-menu">
        <button className="nav__link" onClick={handleOpen}>
          Pokemons
        </button>
        <div
          className={`dropdown-menu__categories 
          ${open ? "active" : "inactive"}`}
          onMouseLeave={handleLeave}
        >
          {categories &&
            categories.map((category) => {
              return (
                <Link
                  to={`/shop/category/${category.name}`}
                  className="nav__link nav__link--category"
                  key={category.id}
                >
                  {category.name}
                </Link>
              );
            })}
        </div>
      </div>

      <NavLink to="/about" className="nav__link">
        Reclamos
      </NavLink>
      <CartWidgets />
    </nav>
  );
};

export default Navbar;
