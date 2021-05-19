import React, { Component } from "react";
import Typed from "react-typed";
import "../../views/home/Home.css";

class TypedLoader extends Component {
  render() {
    return (
      <Typed
        className="fonthome"
        strings={[" Coming soon ..."]}
        typeSpeed={40}
        backSpeed={80}
        backDelay={4000}
        startDelay={1000}
        loop
      ></Typed>
    );
  }
}
export default TypedLoader;
