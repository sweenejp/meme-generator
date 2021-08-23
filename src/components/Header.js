import React from "react";

function Header() {
  return (
    <header>
      <img
        className="header__logo"
        src="https://picsum.photos/200/300"
        alt=""
      />
      <h1 className="header__title">Meme Generator</h1>
    </header>
  );
}
export default Header;
