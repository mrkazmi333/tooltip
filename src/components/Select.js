import React, { Component } from "react";

class Select extends Component {
  //Class for select option of dircetions top,bottom,left and right
  render() {
    const { handleSelectChange, selectRef } = this.props;
    return (
      <div>
        <label>Select Direction:</label>
        <select
          id="direction-select"
          ref={selectRef}
          onChange={handleSelectChange}
        >
          <option value="1">Top</option>
          <option value="2">Down</option>
          <option value="3">Left</option>
          <option value="4">Right</option>
        </select>
      </div>
    );
  }
}

export default Select;
