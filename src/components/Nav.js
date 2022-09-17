import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload}
      />

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        tpye="text"
        placeholder="영화를 검색해주세요."
      ></input>

      <img
        alt="User logged"
        src="https://occ-0-1360-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWD4emUUNG9-oyPmLtux57ADAs35Br3B91_sZh5bB1J1dF0BmCw0HjREQ191qWXy_b1urAJFzV__nQh9kxHlaUFQnbxen7U.png?r=937"
        className="nav__avatar"
      />
    </nav>
  );
}
