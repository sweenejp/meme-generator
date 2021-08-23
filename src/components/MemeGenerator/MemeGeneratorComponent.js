import React from "react";

function MemeGeneratorComponent(props) {
  return (
    <div className="meme-generator">
      <form className="form">
        <input
          className="form__input"
          name="topText"
          value={props.topText}
          onChange={props.handleChange}
          placeholder="Top text goes here"
        />
        <input
          className="form__input"
          name="bottomText"
          value={props.bottomText}
          onChange={props.handleChange}
          placeholder="Bottom text goes here"
        />
        <button className="form__button" onClick={props.handleClick}>
          Get me a new random image!
        </button>
      </form>

      <div className="meme">
        <h2 className="meme__top-text">{props.topText}</h2>
        <h2 className="meme__bottom-text">{props.bottomText}</h2>
        <img className="meme__img" src={props.randomImg} alt="" />
      </div>
    </div>
  );
}
export default MemeGeneratorComponent;
