import React from "react";

const color = ["blue", "red", "yellow"];

export default function MyButtons(props) {
  return color.map((item, index) => {
    return (
      <button
        key={index}
        // onClick={this.handleClick}
        onClick={() => {
          props.handleClick({ item });
        }}
        style={{ backgroundColor: `${item}` }}
      >
        {item}
      </button>
    );
  });
}