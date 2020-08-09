import React from "react";
import Select from "./Select";
import Button from "./Button";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: "1",
      content: "Download",
    };
    this.selectRef = React.createRef();
    console.log("select ref", this.selectRef);
    this.tooltipRef = React.createRef();
    console.log("tooltip ref", this.tooltipRef);
  }
  //function for finding the selct option through dropdown and set that state
  handleSelectChange = () => {
    this.setState({ direction: this.selectRef.current.value });
  };
  getCurrentDirections(key) {
    switch (key) {
      case "1":
        return {
          tooltipDir: "tooltip direction-top",
          arrowDir: "tooltip-arrow tooltip-arrow-bottom",
        };
      case "2":
        return {
          tooltipDir: "tooltip direction-bottom",
          arrowDir: "tooltip-arrow tooltip-arrow-top",
        };
      case "3":
        return {
          tooltipDir: "tooltip direction-left",
          arrowDir: "tooltip-arrow tooltip-arrow-right",
        };
      case "4":
        return {
          tooltipDir: "tooltip direction-right",
          arrowDir: "tooltip-arrow tooltip-arrow-left",
        };
      default:
        return {
          tooltipDir: "tooltip direction-bottom",
          arrowDir: "tooltip-arrow tooltip-arrow-top",
        };
    }
  }

  //when mouse left the button
  setMouseLeave = () => {
    this.setState({ content: "Download " });
    this.tooltipRef.current.style.opacity = "0";
  };

  //when mouse hovers
  setMouseEnter = () => {
    this.setState({ content: <i className="fas fa-download"></i> });
    this.tooltipRef.current.style.opacity = "0.9";
  };

  render() {
    return (
      <div className="App">
        <h1>ToolTip Style</h1>
        <Select
          selectRef={this.selectRef}
          handleSelectChange={this.handleSelectChange}
        />
        <Button
          tooltipRef={this.tooltipRef}
          direction={this.state.direction}
          setMouseLeave={this.setMouseLeave}
          setMouseEnter={this.setMouseEnter}
          getCurrentDirections={this.getCurrentDirections}
          content={this.state.content}
        />
      </div>
    );
  }
}

export default App;
