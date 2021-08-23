import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p>
        Coded by{" "}
        <a
          href="https://github.com/sweenejp/meme-generator"
          target="_blank"
          rel="noreferrer"
        >
          Jimmy Sweeney
        </a>
      </p>
      <p>
        Guided with tutorial from{" "}
        <a
          href="https://www.freecodecamp.org/news/learn-react-by-building-a-meme-generator/"
          target="_blank"
          rel="noreferrer"
        >
          Bob Ziroll
        </a>
      </p>
    </div>
  );
}

export default Footer;
