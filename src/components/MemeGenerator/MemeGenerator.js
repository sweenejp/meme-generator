import React from "react";
import MemeGeneratorComponent from "./MemeGeneratorComponent";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1e7ql7.jpg",
      allMemeImgs: [],
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    console.log(randMemeImg);
    this.setState({ randomImg: randMemeImg });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          allMemeImgs: response.data.memes,
          isLoading: false,
        });
      });
  }
  render() {
    return (
      <MemeGeneratorComponent
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        {...this.state}
      />
    );
  }
}

export default MemeGenerator;
