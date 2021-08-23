import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://image.flaticon.com/icons/png/512/725/725107.png"
        alt="Welcome to Meme Generator"
      />
      <h1 className="header__title">Meme Generator</h1>
    </header>
  );
}
export default Header;
